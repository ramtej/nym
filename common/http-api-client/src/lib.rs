// Copyright 2023 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use async_trait::async_trait;
use reqwest::{IntoUrl, Response, StatusCode};
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use std::fmt::Display;
use std::time::Duration;
use thiserror::Error;
use tracing::warn;
use url::Url;

pub const DEFAULT_TIMEOUT: Duration = Duration::from_secs(3);

pub type PathSegments<'a> = &'a [&'a str];
pub type Params<'a, K, V> = &'a [(K, V)];

pub const NO_PARAMS: Params<'_, &'_ str, &'_ str> = &[];

#[derive(Debug, Error)]
pub enum HttpClientError<E: Display = String> {
    #[error("there was an issue with the REST request: {source}")]
    ReqwestClientError {
        #[from]
        source: reqwest::Error,
    },

    #[error("provided url is malformed: {source}")]
    MalformedUrl {
        #[from]
        source: url::ParseError,
    },

    #[error("the requested resource could not be found")]
    NotFound,

    #[error("request failed with error message: {0}")]
    GenericRequestFailure(String),

    #[error("the request failed with status '{status}'. no additional error message provided")]
    RequestFailure { status: StatusCode },

    #[error("the returned response was empty. status: '{status}'")]
    EmptyResponse { status: StatusCode },

    #[error("failed to resolve request. status: '{status}', additional error message: {error}")]
    EndpointFailure { status: StatusCode, error: E },

    #[cfg(target_arch = "wasm32")]
    #[error("the request has timed out")]
    RequestTimeout,
}

/// A simple extendable client wrapper for http request with extra url sanitization.
#[derive(Debug, Clone)]
pub struct Client {
    base_url: Url,
    reqwest_client: reqwest::Client,

    #[cfg(target_arch = "wasm32")]
    request_timeout: Duration,
}

impl Client {
    // no timeout until https://github.com/seanmonstar/reqwest/issues/1135 is fixed
    pub fn new(base_url: Url, timeout: Option<Duration>) -> Self {
        #[cfg(target_arch = "wasm32")]
        let reqwest_client = reqwest::Client::new();

        // TODO: we should probably be propagating the error rather than panicking,
        // but that'd break bunch of things due to type changes
        #[cfg(not(target_arch = "wasm32"))]
        let reqwest_client = reqwest::ClientBuilder::new()
            .timeout(timeout.unwrap_or(DEFAULT_TIMEOUT))
            .user_agent(format!("nym-http-api-client/{}", env!("CARGO_PKG_VERSION")))
            .build()
            .expect("Client::new()");

        Client {
            base_url,
            reqwest_client,

            #[cfg(target_arch = "wasm32")]
            request_timeout: timeout.unwrap_or(DEFAULT_TIMEOUT),
        }
    }

    pub fn new_url<U, E>(url: U, timeout: Option<Duration>) -> Result<Self, HttpClientError<E>>
    where
        U: IntoUrl,
        E: Display,
    {
        // a naive check: if the provided URL does not start with http(s), add that scheme
        let str_url = url.as_str();

        if !str_url.starts_with("http") {
            let alt = format!("http://{str_url}");
            warn!("the provided url ('{str_url}') does not contain scheme information. Changing it to '{alt}' ...");
            // TODO: or should we maybe default to https?
            Self::new_url(alt, timeout)
        } else {
            Ok(Self::new(url.into_url()?, timeout))
        }
    }

    pub fn change_base_url(&mut self, new_url: Url) {
        self.base_url = new_url
    }

    pub fn current_url(&self) -> &Url {
        &self.base_url
    }

    async fn send_get_request<K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
    ) -> Result<Response, HttpClientError<E>>
    where
        K: AsRef<str>,
        V: AsRef<str>,
        E: Display,
    {
        let url = sanitize_url(&self.base_url, path, params);

        #[cfg(target_arch = "wasm32")]
        {
            Ok(
                wasmtimer::tokio::timeout(
                    self.request_timeout,
                    self.reqwest_client.get(url).send(),
                )
                .await
                .map_err(|_timeout| HttpClientError::RequestTimeout)??,
            )
        }

        #[cfg(not(target_arch = "wasm32"))]
        {
            Ok(self.reqwest_client.get(url).send().await?)
        }
    }

    async fn send_post_request<B, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
        json_body: &B,
    ) -> Result<Response, HttpClientError<E>>
    where
        B: Serialize + ?Sized,
        K: AsRef<str>,
        V: AsRef<str>,
        E: Display,
    {
        let url = sanitize_url(&self.base_url, path, params);

        #[cfg(target_arch = "wasm32")]
        {
            Ok(wasmtimer::tokio::timeout(
                self.request_timeout,
                self.reqwest_client.post(url).json(json_body).send(),
            )
            .await
            .map_err(|_timeout| HttpClientError::RequestTimeout)??)
        }

        #[cfg(not(target_arch = "wasm32"))]
        {
            Ok(self.reqwest_client.post(url).json(json_body).send().await?)
        }
    }

    pub async fn get_json<T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
    ) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        K: AsRef<str>,
        V: AsRef<str>,
        E: Display + DeserializeOwned,
    {
        let res = self.send_get_request(path, params).await?;
        parse_response(res, false).await
    }

    pub async fn post_json<B, T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized,
        for<'a> T: Deserialize<'a>,
        K: AsRef<str>,
        V: AsRef<str>,
        E: Display + DeserializeOwned,
    {
        let res = self.send_post_request(path, params, json_body).await?;
        parse_response(res, true).await
    }

    pub async fn get_json_endpoint<T, S, E>(&self, endpoint: S) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str>,
    {
        #[cfg(target_arch = "wasm32")]
        let res = {
            wasmtimer::tokio::timeout(
                self.request_timeout,
                self.reqwest_client
                    .get(self.base_url.join(endpoint.as_ref())?)
                    .send(),
            )
            .await
            .map_err(|_timeout| HttpClientError::RequestTimeout)??
        };

        #[cfg(not(target_arch = "wasm32"))]
        let res = {
            self.reqwest_client
                .get(self.base_url.join(endpoint.as_ref())?)
                .send()
                .await?
        };

        parse_response(res, false).await
    }

    pub async fn post_json_endpoint<B, T, S, E>(
        &self,
        endpoint: S,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized,
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str>,
    {
        #[cfg(target_arch = "wasm32")]
        let res = {
            wasmtimer::tokio::timeout(
                self.request_timeout,
                self.reqwest_client
                    .post(self.base_url.join(endpoint.as_ref())?)
                    .json(json_body)
                    .send(),
            )
            .await
            .map_err(|_timeout| HttpClientError::RequestTimeout)??
        };

        #[cfg(not(target_arch = "wasm32"))]
        let res = {
            self.reqwest_client
                .post(self.base_url.join(endpoint.as_ref())?)
                .json(json_body)
                .send()
                .await?
        };

        parse_response(res, true).await
    }
}

// define those methods on the trait for nicer extensions (and not having to type the thing twice)
#[cfg_attr(target_arch = "wasm32", async_trait(?Send))]
#[cfg_attr(not(target_arch = "wasm32"), async_trait)]
pub trait ApiClient {
    /// 'get' json data from the segment-defined path, i.e. for example `["api", "v1", "mixnodes"]`,
    /// with tuple defined key-value parameters, i.e. for example `[("since", "12345")]`
    async fn get_json<T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
    ) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        K: AsRef<str> + Sync,
        V: AsRef<str> + Sync,
        E: Display + DeserializeOwned;

    async fn post_json<B, T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized + Sync,
        for<'a> T: Deserialize<'a>,
        K: AsRef<str> + Sync,
        V: AsRef<str> + Sync,
        E: Display + DeserializeOwned;

    /// `get` json data from the provided absolute endpoint, i.e. for example `"/api/v1/mixnodes?since=12345"`
    async fn get_json_from<T, S, E>(&self, endpoint: S) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str> + Sync + Send;

    async fn post_json_data_to<B, T, S, E>(
        &self,
        endpoint: S,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized + Sync,
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str> + Sync + Send;
}

#[cfg_attr(target_arch = "wasm32", async_trait(?Send))]
#[cfg_attr(not(target_arch = "wasm32"), async_trait)]
impl ApiClient for Client {
    async fn get_json<T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
    ) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        K: AsRef<str> + Sync,
        V: AsRef<str> + Sync,
        E: Display + DeserializeOwned,
    {
        self.get_json(path, params).await
    }

    async fn post_json<B, T, K, V, E>(
        &self,
        path: PathSegments<'_>,
        params: Params<'_, K, V>,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized + Sync,
        for<'a> T: Deserialize<'a>,
        K: AsRef<str> + Sync,
        V: AsRef<str> + Sync,
        E: Display + DeserializeOwned,
    {
        self.post_json(path, params, json_body).await
    }

    async fn get_json_from<T, S, E>(&self, endpoint: S) -> Result<T, HttpClientError<E>>
    where
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str> + Sync + Send,
    {
        self.get_json_endpoint(endpoint).await
    }

    async fn post_json_data_to<B, T, S, E>(
        &self,
        endpoint: S,
        json_body: &B,
    ) -> Result<T, HttpClientError<E>>
    where
        B: Serialize + ?Sized + Sync,
        for<'a> T: Deserialize<'a>,
        E: Display + DeserializeOwned,
        S: AsRef<str> + Sync + Send,
    {
        self.post_json_endpoint(endpoint, json_body).await
    }
}

// utility function that should solve the double slash problem in API urls forever.
pub fn sanitize_url<K: AsRef<str>, V: AsRef<str>>(
    base: &Url,
    segments: PathSegments<'_>,
    params: Params<'_, K, V>,
) -> Url {
    let mut url = base.clone();
    let mut path_segments = url
        .path_segments_mut()
        .expect("provided validator url does not have a base!");

    path_segments.pop_if_empty();

    for segment in segments {
        let segment = segment.strip_prefix('/').unwrap_or(segment);
        let segment = segment.strip_suffix('/').unwrap_or(segment);

        path_segments.push(segment);
    }

    // I don't understand why compiler couldn't figure out that it's no longer used
    // and can be dropped
    drop(path_segments);

    if !params.is_empty() {
        url.query_pairs_mut().extend_pairs(params);
    }

    url
}

async fn parse_response<T, E>(res: Response, allow_empty: bool) -> Result<T, HttpClientError<E>>
where
    T: DeserializeOwned,
    E: DeserializeOwned + Display,
{
    let status = res.status();

    if !allow_empty {
        if let Some(0) = res.content_length() {
            return Err(HttpClientError::EmptyResponse { status });
        }
    }

    if res.status().is_success() {
        Ok(res.json().await?)
    } else if res.status() == StatusCode::NOT_FOUND {
        Err(HttpClientError::NotFound)
    } else {
        let Ok(plaintext) = res.text().await else {
            return Err(HttpClientError::RequestFailure { status });
        };

        if let Ok(request_error) = serde_json::from_str(&plaintext) {
            Err(HttpClientError::EndpointFailure {
                status,
                error: request_error,
            })
        } else {
            Err(HttpClientError::GenericRequestFailure(plaintext))
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sanitizing_urls() {
        let base_url: Url = "http://foomp.com".parse().unwrap();

        // works with 1 segment
        assert_eq!(
            "http://foomp.com/foo",
            sanitize_url(&base_url, &["foo"], NO_PARAMS).as_str()
        );

        // works with 2 segments
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["foo", "bar"], NO_PARAMS).as_str()
        );

        // works with leading slash
        assert_eq!(
            "http://foomp.com/foo",
            sanitize_url(&base_url, &["/foo"], NO_PARAMS).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["/foo", "bar"], NO_PARAMS).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["foo", "/bar"], NO_PARAMS).as_str()
        );

        // works with trailing slash
        assert_eq!(
            "http://foomp.com/foo",
            sanitize_url(&base_url, &["foo/"], NO_PARAMS).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["foo/", "bar"], NO_PARAMS).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["foo", "bar/"], NO_PARAMS).as_str()
        );

        // works with both leading and trailing slash
        assert_eq!(
            "http://foomp.com/foo",
            sanitize_url(&base_url, &["/foo/"], NO_PARAMS).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar",
            sanitize_url(&base_url, &["/foo/", "/bar/"], NO_PARAMS).as_str()
        );

        // adds params
        assert_eq!(
            "http://foomp.com/foo/bar?foomp=baz",
            sanitize_url(&base_url, &["foo", "bar"], &[("foomp", "baz")]).as_str()
        );
        assert_eq!(
            "http://foomp.com/foo/bar?arg1=val1&arg2=val2",
            sanitize_url(
                &base_url,
                &["/foo/", "/bar/"],
                &[("arg1", "val1"), ("arg2", "val2")]
            )
            .as_str()
        );
    }
}
