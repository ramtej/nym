use crate::errors::{Error, Result};
use crate::recovery_storage::RecoveryStorage;
use log::*;
use nym_bandwidth_controller::acquire::state::State;
use nym_client_core::config::disk_persistence::CommonClientPaths;
use nym_config::DEFAULT_DATA_DIR;
use nym_credential_storage::persistent_storage::PersistentStorage;
use nym_validator_client::nyxd::contract_traits::{CoconutBandwidthSigningClient, DkgQueryClient};
use nym_validator_client::nyxd::Coin;
use std::path::PathBuf;
use std::process::exit;
use std::time::{Duration, SystemTime};

const SAFETY_BUFFER_SECS: u64 = 60; // 1 minute

pub async fn issue_credential<C>(
    client: &C,
    amount: Coin,
    persistent_storage: &PersistentStorage,
    recovery_storage_path: PathBuf,
) -> Result<()>
where
    C: DkgQueryClient + CoconutBandwidthSigningClient + Send + Sync,
{
    let recovery_storage = setup_recovery_storage(recovery_storage_path).await;

    block_until_coconut_is_available(client).await?;
    info!("Starting to deposit funds, don't kill the process");

    if let Ok(recovered_amount) =
        recover_credentials(client, &recovery_storage, persistent_storage).await
    {
        if recovered_amount != 0 {
            info!(
                "Recovered credentials in the amount of {}",
                recovered_amount
            );
            return Ok(());
        }
    };

    let state = nym_bandwidth_controller::acquire::deposit(client, amount.clone()).await?;

    if nym_bandwidth_controller::acquire::get_credential(&state, client, persistent_storage)
        .await
        .is_err()
    {
        warn!("Failed to obtain credential. Dumping recovery data.",);
        match recovery_storage.insert_voucher(&state.voucher) {
            Ok(file_path) => {
                warn!("Dumped recovery data to {}. Try using recovery mode to convert it to a credential", file_path.to_str().unwrap());
            }
            Err(e) => {
                error!("Could not dump recovery data to file system due to {:?}, the deposit will be lost!", e)
            }
        }

        return Err(Error::Credential(
            nym_credentials::error::Error::BandwidthCredentialError,
        ));
    }

    info!("Succeeded adding a credential with amount {amount}");

    Ok(())
}

pub async fn setup_recovery_storage(recovery_dir: PathBuf) -> RecoveryStorage {
    RecoveryStorage::new(recovery_dir).expect("")
}

pub async fn setup_persistent_storage(client_home_directory: PathBuf) -> PersistentStorage {
    let data_dir = client_home_directory.join(DEFAULT_DATA_DIR);
    let paths = CommonClientPaths::new_base(data_dir);
    let db_path = paths.credentials_database;

    nym_credential_storage::initialise_persistent_storage(db_path).await
}

pub async fn block_until_coconut_is_available<C>(client: &C) -> Result<()>
where
    C: DkgQueryClient + Send + Sync,
{
    loop {
        let epoch = client.get_current_epoch().await?;
        let current_timestamp_secs = SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .expect("the system clock is set to 01/01/1970 (or earlier)")
            .as_secs();
        if epoch.state.is_final() {
            if current_timestamp_secs + SAFETY_BUFFER_SECS >= epoch.finish_timestamp.seconds() {
                info!("In the next {} minute(s), a transition will take place in the coconut system. Deposits should be halted in this time for safety reasons.", SAFETY_BUFFER_SECS / 60);
                exit(0);
            }

            break;
        } else {
            // Use 1 additional second to not start the next iteration immediately and spam get_current_epoch queries
            let secs_until_final = epoch
                .final_timestamp_secs()
                .saturating_sub(current_timestamp_secs)
                + 1;
            info!("Approximately {} seconds until coconut is available. Sleeping until then. You can safely kill the process at any moment.", secs_until_final);
            tokio::time::sleep(Duration::from_secs(secs_until_final)).await;
        }
    }

    Ok(())
}

pub async fn recover_credentials<C>(
    client: &C,
    recovery_storage: &RecoveryStorage,
    shared_storage: &PersistentStorage,
) -> Result<u128>
where
    C: DkgQueryClient + Send + Sync,
{
    let mut recovered_amount: u128 = 0;
    for voucher in recovery_storage.unconsumed_vouchers()? {
        let voucher_value = voucher.get_voucher_value();
        recovered_amount += voucher_value.parse::<u128>()?;

        let state = State::new(voucher);
        let voucher = state.voucher.tx_hash();
        if let Err(e) =
            nym_bandwidth_controller::acquire::get_credential(&state, client, shared_storage).await
        {
            error!("Could not recover deposit {voucher} due to {e}, try again later",)
        } else {
            info!("Converted deposit {voucher} to a credential, removing recovery data for it",);
            if let Err(e) = recovery_storage.remove_voucher(voucher.to_string()) {
                warn!("Could not remove recovery data: {e}");
            }
        }
    }

    Ok(recovered_amount)
}
