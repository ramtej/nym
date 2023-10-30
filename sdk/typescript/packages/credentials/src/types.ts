// TODO: This entire file could probably be removed,
// if the referenced types can be put in a wrapper package of common/client-core with wasm_bindgen

export interface CredentialClientOpts {
  networkDetails?: NymNetworkDetails;
  useSandbox?: boolean;
}

// Taken from https://github.com/nymtech/nym/blob/5a3dcdf9602a49bbda8c974960dbe23a10772dbd/common/network-defaults/src/lib.rs#L90
export interface NymNetworkDetails {
  networkName: string;
  chainDetails: ChainDetails;
  endpoints: ValidatorDetails[];
  contracts: NymContracts;
  explorerApi?: string;
}

// Source: https://github.com/nymtech/nym/blob/5a3dcdf9602a49bbda8c974960dbe23a10772dbd/common/network-defaults/src/lib.rs#L373
interface DenomDetailsOwned {
  base: string;
  display: string;
  displayExponent: number;
}

// Source: https://github.com/nymtech/nym/blob/5a3dcdf9602a49bbda8c974960dbe23a10772dbd/common/network-defaults/src/lib.rs#L409
interface ValidatorDetails {
  nyxdUrl: string;
  apiUrl?: string;
}

// Source: https://github.com/nymtech/nym/blob/5a3dcdf9602a49bbda8c974960dbe23a10772dbd/common/network-defaults/src/lib.rs#L29
interface ChainDetails {
  bech32AccountPrefix: string;
  mixDenom: DenomDetailsOwned;
  stakeDenom: DenomDetailsOwned;
}

// Source: https://github.com/nymtech/nym/blob/5a3dcdf9602a49bbda8c974960dbe23a10772dbd/common/network-defaults/src/lib.rs#L45
interface NymContracts {
  mixnetContractAddress?: string;
  vestingContractAddress?: string;
  coconutBandwidthContractAddress?: string;
  groupContractAddress?: string;
  multisigContractAddress?: string;
  coconutDkgContractAddress?: string;
  ephemeraContractAddress?: string;
  serviceProviderDirectoryContractAddress?: string;
  nameServiceContractAddress?: string;
}
