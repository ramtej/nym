// Copyright 2023 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use async_trait::async_trait;
use reqwest::{IntoUrl, Response, StatusCode, Url};
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use std::fmt::Display;
use thiserror::Error;

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

    #[error("not found")]
    NotFound,

    #[error("request failed with error message: {0}")]
    GenericRequestFailure(String),

    #[error("failed to resolve request. status code: {status}, additional error message: {error}")]
    EndpointFailure { status: u16, error: E },
}

/// A simple extendable client wrapper for http request with extra url sanitization.
#[derive(Debug, Clone)]
pub struct Client {
    base_url: Url,
    reqwest_client: reqwest::Client,
}

impl Client {
    pub fn new(base_url: Url) -> Self {
        Client {
            base_url,
            reqwest_client: reqwest::Client::new(),
        }
    }

    pub fn new_url<U, E>(url: U) -> Result<Self, HttpClientError<E>>
    where
        U: IntoUrl,
        E: Display,
    {
        Ok(Self::new(url.into_url()?))
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
        Ok(self.reqwest_client.get(url).send().await?)
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
        Ok(self.reqwest_client.post(url).json(json_body).send().await?)
    }

    pub async fn get_json_endpoint<T, K, V, E>(
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
        parse_response(res).await
    }

    pub async fn post_json_endpoint<B, T, K, V, E>(
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
        parse_response(res).await
    }
}

// define those methods on the trait for nicer extensions (and not having to type the thing twice)
#[cfg_attr(target_arch = "wasm32", async_trait(?Send))]
#[cfg_attr(not(target_arch = "wasm32"), async_trait)]
pub trait ApiClient {
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
        self.get_json_endpoint(path, params).await
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
        self.post_json_endpoint(path, params, json_body).await
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

async fn parse_response<T, E>(res: Response) -> Result<T, HttpClientError<E>>
where
    T: DeserializeOwned,
    E: DeserializeOwned + Display,
{
    let status = res.status();

    if res.status().is_success() {
        Ok(res.json().await?)
    } else if res.status() == StatusCode::NOT_FOUND {
        Err(HttpClientError::NotFound)
    } else {
        let plaintext = res.text().await?;
        if let Ok(request_error) = serde_json::from_str(&plaintext) {
            Err(HttpClientError::EndpointFailure {
                status: status.as_u16(),
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
