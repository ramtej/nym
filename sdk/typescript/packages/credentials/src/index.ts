/* eslint-disable no-console, import/no-extraneous-dependencies */
import type { WasmCoconutCredential } from '@nymproject/nym-credential-client-wasm';
import type { CredentialClientOpts } from './types';

import init, { acquireCredential, recoverCredential } from '@nymproject/nym-credential-client-wasm';

// @ts-expect-error has no standard export
import getCredentialWasmBytes from '@nymproject/nym-credential-client-wasm/nym_credential_client_wasm_bg.wasm';

export async function acquireBandwidthCredential(
  mnemonic: string,
  amountToDeposit: string,
  opts: CredentialClientOpts,
): Promise<WasmCoconutCredential> {
  // rollup with provide a function to get the mixFetch WASM bytes
  const bytes = await getCredentialWasmBytes();

  // load rust WASM package
  await init(bytes);
  console.log('Loaded RUST WASM');

  const credential: WasmCoconutCredential = await acquireCredential(mnemonic, amountToDeposit, opts);
  return credential;
}

export async function recoverBandwidthCredential(
  mnemonic: string,
  voucher: Uint8Array,
  opts: CredentialClientOpts,
): Promise<WasmCoconutCredential> {
  // rollup with provide a function to get the mixFetch WASM bytes
  const bytes = await getCredentialWasmBytes();

  // load rust WASM package
  await init(bytes);
  console.log('Loaded RUST WASM');

  const credential: WasmCoconutCredential = await recoverCredential(mnemonic, voucher, opts);
  return credential;
}
