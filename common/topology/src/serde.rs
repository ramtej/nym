// Copyright 2023 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use crate::gateway::GatewayConversionError;
use crate::mix::MixnodeConversionError;
use crate::{gateway, mix, MixLayer, NymTopology};
use nym_config::defaults::{DEFAULT_CLIENT_LISTENING_PORT, DEFAULT_MIX_LISTENING_PORT};
use nym_crypto::asymmetric::{encryption, identity};
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::net::{IpAddr, SocketAddr};
use thiserror::Error;

#[cfg(feature = "wasm-serde-types")]
use tsify::Tsify;

#[cfg(feature = "wasm-serde-types")]
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[cfg(feature = "wasm-serde-types")]
use wasm_utils::error::simple_js_error;

#[derive(Debug, Error)]
pub enum SerializableTopologyError {
    #[error("got invalid mix layer {value}. Expected 1, 2 or 3.")]
    InvalidMixLayer { value: u8 },

    #[error(transparent)]
    GatewayConversion(#[from] GatewayConversionError),

    #[error(transparent)]
    MixnodeConversion(#[from] MixnodeConversionError),

    #[error("The provided mixnode map was malformed: {msg}")]
    MalformedMixnodeMap { msg: String },

    #[error("The provided gateway list was malformed: {msg}")]
    MalformedGatewayList { msg: String },
}

#[cfg(feature = "wasm-serde-types")]
impl From<SerializableTopologyError> for JsValue {
    fn from(value: SerializableTopologyError) -> Self {
        simple_js_error(value.to_string())
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[cfg_attr(feature = "wasm-serde-types", derive(Tsify))]
#[cfg_attr(feature = "wasm-serde-types", tsify(into_wasm_abi, from_wasm_abi))]
#[serde(rename_all = "camelCase")]
#[serde(deny_unknown_fields)]
pub struct SerializableNymTopology {
    pub mixnodes: BTreeMap<MixLayer, Vec<SerializableMixNode>>,
    pub gateways: Vec<SerializableGateway>,
}

impl TryFrom<SerializableNymTopology> for NymTopology {
    type Error = SerializableTopologyError;

    fn try_from(value: SerializableNymTopology) -> Result<Self, Self::Error> {
        let mut converted_mixes = BTreeMap::new();

        for (layer, nodes) in value.mixnodes {
            let layer_nodes = nodes
                .into_iter()
                .map(TryInto::try_into)
                .collect::<Result<_, _>>()?;

            converted_mixes.insert(layer, layer_nodes);
        }

        let gateways = value
            .gateways
            .into_iter()
            .map(TryInto::try_into)
            .collect::<Result<_, _>>()?;

        Ok(NymTopology::new(converted_mixes, gateways))
    }
}

impl From<NymTopology> for SerializableNymTopology {
    fn from(value: NymTopology) -> Self {
        SerializableNymTopology {
            mixnodes: value
                .mixes()
                .iter()
                .map(|(&l, nodes)| (l, nodes.iter().map(Into::into).collect()))
                .collect(),
            gateways: value.gateways().iter().map(Into::into).collect(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[cfg_attr(feature = "wasm-serde-types", derive(Tsify))]
#[cfg_attr(feature = "wasm-serde-types", tsify(into_wasm_abi, from_wasm_abi))]
#[serde(rename_all = "camelCase")]
#[serde(deny_unknown_fields)]
pub struct SerializableMixNode {
    // this is a `MixId` but due to typescript issue, we're using u32 directly.
    #[serde(alias = "mix_id")]
    pub mix_id: u32,

    pub owner: String,

    pub host: String,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    #[serde(alias = "mix_port")]
    pub mix_port: Option<u16>,

    #[serde(alias = "identity_key")]
    pub identity_key: String,

    #[serde(alias = "sphinx_key")]
    pub sphinx_key: String,

    // this is a `MixLayer` but due to typescript issue, we're using u8 directly.
    pub layer: u8,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    pub version: Option<String>,
}

impl TryFrom<SerializableMixNode> for mix::Node {
    type Error = SerializableTopologyError;

    fn try_from(value: SerializableMixNode) -> Result<Self, Self::Error> {
        let host = mix::Node::parse_host(&value.host)?;

        let mix_port = value.mix_port.unwrap_or(DEFAULT_MIX_LISTENING_PORT);
        let version = value.version.map(|v| v.as_str().into()).unwrap_or_default();

        // try to completely resolve the host in the mix situation to avoid doing it every
        // single time we want to construct a path
        let mix_host = mix::Node::extract_mix_host(&host, mix_port)?;

        Ok(mix::Node {
            mix_id: value.mix_id,
            owner: value.owner,
            host,
            mix_host,
            identity_key: identity::PublicKey::from_base58_string(&value.identity_key)
                .map_err(MixnodeConversionError::from)?,
            sphinx_key: encryption::PublicKey::from_base58_string(&value.sphinx_key)
                .map_err(MixnodeConversionError::from)?,
            layer: mix::Layer::try_from(value.layer)
                .map_err(|_| SerializableTopologyError::InvalidMixLayer { value: value.layer })?,
            version,
        })
    }
}

impl<'a> From<&'a mix::Node> for SerializableMixNode {
    fn from(value: &'a mix::Node) -> Self {
        SerializableMixNode {
            mix_id: value.mix_id,
            owner: value.owner.clone(),
            host: value.host.to_string(),
            mix_port: Some(value.mix_host.port()),
            identity_key: value.identity_key.to_base58_string(),
            sphinx_key: value.sphinx_key.to_base58_string(),
            layer: value.layer.into(),
            version: Some(value.version.to_string()),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[cfg_attr(feature = "wasm-serde-types", derive(Tsify))]
#[cfg_attr(feature = "wasm-serde-types", tsify(into_wasm_abi, from_wasm_abi))]
#[serde(rename_all = "camelCase")]
#[serde(deny_unknown_fields)]
pub struct SerializableGateway {
    pub owner: String,

    pub host: String,

    // optional ip address in the case of host being a hostname that can't be resolved
    // (thank you wasm)
    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    #[serde(alias = "explicit_ip")]
    pub explicit_ip: Option<IpAddr>,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    #[serde(alias = "mix_port")]
    pub mix_port: Option<u16>,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    #[serde(alias = "clients_port")]
    #[serde(alias = "clients_ws_port")]
    pub clients_ws_port: Option<u16>,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    #[serde(alias = "clients_wss_port")]
    pub clients_wss_port: Option<u16>,

    #[serde(alias = "identity_key")]
    pub identity_key: String,

    #[serde(alias = "sphinx_key")]
    pub sphinx_key: String,

    #[cfg_attr(feature = "wasm-serde-types", tsify(optional))]
    pub version: Option<String>,
}

impl TryFrom<SerializableGateway> for gateway::Node {
    type Error = SerializableTopologyError;

    fn try_from(value: SerializableGateway) -> Result<Self, Self::Error> {
        let host = gateway::Node::parse_host(&value.host)?;

        let mix_port = value.mix_port.unwrap_or(DEFAULT_MIX_LISTENING_PORT);
        let clients_ws_port = value
            .clients_ws_port
            .unwrap_or(DEFAULT_CLIENT_LISTENING_PORT);
        let version = value.version.map(|v| v.as_str().into()).unwrap_or_default();

        // try to completely resolve the host in the mix situation to avoid doing it every
        // single time we want to construct a path
        let mix_host = if let Some(explicit_ip) = value.explicit_ip {
            SocketAddr::new(explicit_ip, mix_port)
        } else {
            gateway::Node::extract_mix_host(&host, mix_port)?
        };

        Ok(gateway::Node {
            owner: value.owner,
            host,
            mix_host,
            clients_ws_port,
            clients_wss_port: value.clients_wss_port,
            identity_key: identity::PublicKey::from_base58_string(&value.identity_key)
                .map_err(GatewayConversionError::from)?,
            sphinx_key: encryption::PublicKey::from_base58_string(&value.sphinx_key)
                .map_err(GatewayConversionError::from)?,
            version,
        })
    }
}

impl<'a> From<&'a gateway::Node> for SerializableGateway {
    fn from(value: &'a gateway::Node) -> Self {
        SerializableGateway {
            owner: value.owner.clone(),
            host: value.host.to_string(),
            explicit_ip: Some(value.mix_host.ip()),
            mix_port: Some(value.mix_host.port()),
            clients_ws_port: Some(value.clients_ws_port),
            clients_wss_port: value.clients_wss_port,
            identity_key: value.identity_key.to_base58_string(),
            sphinx_key: value.sphinx_key.to_base58_string(),
            version: Some(value.version.to_string()),
        }
    }
}
