// Copyright 2020 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use crate::{notifications::Notifier, packet_sender::PacketSender};
use futures::channel::mpsc::{UnboundedReceiver, UnboundedSender};
use log::*;
use tokio::time::{delay_for, Duration};

pub(crate) type MixnetReceiver = UnboundedReceiver<Vec<Vec<u8>>>;
pub(crate) type MixnetSender = UnboundedSender<Vec<Vec<u8>>>;
pub(crate) type AckSender = UnboundedSender<Vec<Vec<u8>>>;

pub(crate) const MONITOR_RUN_INTERVAL: Duration = Duration::from_secs(60);
pub(crate) const NOTIFIER_DELIVERY_TIMEOUT: Duration = Duration::from_secs(20);

pub struct Monitor;

impl Monitor {
    pub fn new() -> Monitor {
        Monitor {}
    }

    pub(crate) async fn run(&mut self, mut notifier: Notifier, mut packet_sender: PacketSender) {
        println!("Network monitor running - note: 'good' nodes are hardcoded.");
        println!("-----------------------------------------------------------");
        tokio::spawn(async move {
            notifier.run().await;
        });

        tokio::spawn(async move {
            loop {
                info!(target: "Monitor", "Starting test run");

                if let Err(err) = packet_sender.run_test().await {
                    error!("Test run failed! - {:?}", err);
                }

                // only start delay after test run finished (note: this makes it so that
                // test runs do not happen after EXACTLY MONITOR_RUN_INTERVAL, but at least
                // it will be way less likely for multiple test runs to overlap each other)
                delay_for(MONITOR_RUN_INTERVAL).await;
            }
        });

        self.wait_for_interrupt().await
    }

    async fn wait_for_interrupt(&self) {
        if let Err(e) = tokio::signal::ctrl_c().await {
            error!(
                "There was an error while capturing SIGINT - {:?}. We will terminate regardless",
                e
            );
        }
        println!("Received SIGINT - the network monitor will terminate now");
    }
}
