// Copyright 2021-2023 - Nym Technologies SA <contact@nymtech.net>
// SPDX-License-Identifier: Apache-2.0

use super::storage;
use cosmwasm_std::DepsMut;
use cosmwasm_std::MessageInfo;
use cosmwasm_std::Response;
use mixnet_contract_common::error::MixnetContractError;
use mixnet_contract_common::events::{
    new_rewarding_validator_address_update_event, new_settings_update_event,
};
use mixnet_contract_common::ContractStateParams;

pub fn try_update_rewarding_validator_address(
    deps: DepsMut<'_>,
    info: MessageInfo,
    address: String,
) -> Result<Response, MixnetContractError> {
    let mut state = storage::CONTRACT_STATE.load(deps.storage)?;

    if info.sender != state.owner {
        return Err(MixnetContractError::Unauthorized);
    }

    let new_address = deps.api.addr_validate(&address)?;
    let old_address = state.rewarding_validator_address;

    state.rewarding_validator_address = new_address.clone();
    storage::CONTRACT_STATE.save(deps.storage, &state)?;

    Ok(
        Response::new().add_event(new_rewarding_validator_address_update_event(
            old_address,
            new_address,
        )),
    )
}

pub(crate) fn try_update_contract_settings(
    deps: DepsMut<'_>,
    info: MessageInfo,
    params: ContractStateParams,
) -> Result<Response, MixnetContractError> {
    let mut state = storage::CONTRACT_STATE.load(deps.storage)?;

    // check if this is executed by the owner, if not reject the transaction
    if info.sender != state.owner {
        return Err(MixnetContractError::Unauthorized);
    }

    let response = Response::new().add_event(new_settings_update_event(&state.params, &params));

    state.params = params;
    storage::CONTRACT_STATE.save(deps.storage, &state)?;

    Ok(response)
}

#[cfg(test)]
pub mod tests {
    use super::*;
    use crate::constants::{INITIAL_GATEWAY_PLEDGE_AMOUNT, INITIAL_MIXNODE_PLEDGE_AMOUNT};
    use crate::mixnet_contract_settings::queries::query_rewarding_validator_address;
    use crate::mixnet_contract_settings::storage::rewarding_denom;
    use crate::mixnet_contract_settings::transactions::try_update_contract_settings;
    use crate::support::tests::test_helpers;
    use cosmwasm_std::testing::mock_info;
    use cosmwasm_std::{Addr, Coin, Response, Uint128};
    use mixnet_contract_common::error::MixnetContractError;
    use mixnet_contract_common::ContractStateParams;

    #[test]
    fn update_contract_rewarding_validtor_address() {
        let mut deps = test_helpers::init_contract();

        let info = mock_info("not-the-creator", &[]);
        let res = try_update_rewarding_validator_address(
            deps.as_mut(),
            info,
            "not-the-creator".to_string(),
        );
        assert_eq!(res, Err(MixnetContractError::Unauthorized));

        let info = mock_info("creator", &[]);
        let res = try_update_rewarding_validator_address(
            deps.as_mut(),
            info,
            "new-good-address".to_string(),
        );
        assert_eq!(
            res,
            Ok(
                Response::default().add_event(new_rewarding_validator_address_update_event(
                    Addr::unchecked("rewarder"),
                    Addr::unchecked("new-good-address")
                ))
            )
        );

        let state = storage::CONTRACT_STATE.load(&deps.storage).unwrap();
        assert_eq!(
            state.rewarding_validator_address,
            Addr::unchecked("new-good-address")
        );

        assert_eq!(
            state.rewarding_validator_address,
            query_rewarding_validator_address(deps.as_ref()).unwrap()
        );
    }

    #[test]
    fn updating_contract_settings() {
        let mut deps = test_helpers::init_contract();
        let denom = rewarding_denom(deps.as_ref().storage).unwrap();

        let new_params = ContractStateParams {
            minimum_mixnode_delegation: None,
            minimum_mixnode_pledge: Coin {
                denom: denom.clone(),
                amount: INITIAL_MIXNODE_PLEDGE_AMOUNT,
            },
            minimum_gateway_pledge: Coin {
                denom,
                amount: INITIAL_GATEWAY_PLEDGE_AMOUNT + Uint128::new(1234),
            },
        };

        let initial_params = storage::CONTRACT_STATE
            .load(deps.as_ref().storage)
            .unwrap()
            .params;

        // sanity check to ensure new_params are different than the default ones
        assert_ne!(new_params, initial_params);

        // cannot be updated from non-owner account
        let info = mock_info("not-the-creator", &[]);
        let res = try_update_contract_settings(deps.as_mut(), info, new_params.clone());
        assert_eq!(res, Err(MixnetContractError::Unauthorized));

        // but works fine from the creator account
        let info = mock_info("creator", &[]);
        let res = try_update_contract_settings(deps.as_mut(), info, new_params.clone());
        assert_eq!(
            res,
            Ok(Response::new().add_event(new_settings_update_event(&initial_params, &new_params)))
        );

        // and the state is actually updated
        let current_state = storage::CONTRACT_STATE.load(deps.as_ref().storage).unwrap();
        assert_eq!(current_state.params, new_params);

        // // error is thrown if rewarded set is smaller than the active set
        // let info = mock_info("creator", &[]);
        // let mut new_params = current_state.params.clone();
        // new_params.mixnode_rewarded_set_size = new_params.mixnode_active_set_size - 1;
        // let res = try_update_contract_settings(deps.as_mut(), info, new_params);
        // assert_eq!(Err(MixnetContractError::InvalidActiveSetSize), res);
        //
        // // error is thrown for 0 size rewarded set
        // let info = mock_info("creator", &[]);
        // let mut new_params = current_state.params.clone();
        // new_params.mixnode_rewarded_set_size = 0;
        // let res = try_update_contract_settings(deps.as_mut(), info, new_params);
        // assert_eq!(Err(MixnetContractError::ZeroRewardedSet), res);
        //
        // // error is thrown for 0 size active set
        // let info = mock_info("creator", &[]);
        // let mut new_params = current_state.params;
        // new_params.mixnode_active_set_size = 0;
        // let res = try_update_contract_settings(deps.as_mut(), info, new_params);
        // assert_eq!(Err(MixnetContractError::ZeroActiveSet), res);
    }
}
