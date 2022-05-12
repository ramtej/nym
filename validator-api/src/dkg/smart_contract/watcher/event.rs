// Copyright 2022 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use coconut_dkg_common::types::{Addr, BlockHeight, DealerDetails};
use std::fmt::{Display, Formatter};

#[derive(Debug)]
pub(crate) struct Event {
    pub(crate) height: BlockHeight,
    pub(crate) event_type: EventType,
}

impl Event {
    pub(crate) fn new(height: BlockHeight, event_type: EventType) -> Self {
        Event { height, event_type }
    }
}

impl Display for Event {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "SmartContractWatcherEvent at height {}. {}",
            self.height, self.event_type
        )
    }
}

#[derive(Debug)]
pub(crate) enum DealerChange {
    Addition { details: DealerDetails },
    Removal { address: Addr },
}

#[derive(Debug)]
pub(crate) enum EventType {
    DealerSetChange { changes: Vec<DealerChange> },
    NewDealingCommitment,
}

impl Display for EventType {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "EventType - ")?;
        match self {
            EventType::DealerSetChange { changes } => {
                write!(f, "DealerSetChange with {} changes", changes.len())
            }
            EventType::NewDealingCommitment => write!(f, "NewDealingCommitment"),
        }
    }
}
