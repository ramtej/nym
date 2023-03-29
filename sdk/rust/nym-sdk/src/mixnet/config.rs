use client_core::config::DebugConfig;
use nym_network_defaults::mainnet;
use url::Url;

/// Config struct for [`crate::mixnet::MixnetClient`]
pub struct Config {
    /// If the user has explicitly specified a gateway.
    pub user_chosen_gateway: Option<String>,

    /// List of nym-api endpoints
    pub nym_api_endpoints: Vec<Url>,

    /// Address of service provider, if running in socks5 mode
    pub socks5_service_provider: Option<String>,

    /// Flags controlling all sorts of internal client behaviour.
    /// Changing these risk compromising network anonymity!
    pub debug_config: DebugConfig,
}

impl Default for Config {
    fn default() -> Self {
        let nym_api_endpoints = vec![mainnet::NYM_API.to_string().parse().unwrap()];
        Self {
            user_chosen_gateway: Default::default(),
            nym_api_endpoints,
            socks5_service_provider: Default::default(),
            debug_config: Default::default(),
        }
    }
}

impl Config {
    /// Creates a new [`Config`].
    pub fn new(
        user_chosen_gateway: Option<String>,
        nym_api_endpoints: Vec<Url>,
        socks5_service_provider: Option<String>,
    ) -> Self {
        Self {
            user_chosen_gateway,
            nym_api_endpoints,
            socks5_service_provider,
            debug_config: DebugConfig::default(),
        }
    }
}
