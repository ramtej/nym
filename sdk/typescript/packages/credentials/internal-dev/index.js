import { createBandwithCredential } from '../dist/esm-full-fat/index.js';

const mnemonic =
  'discover doll talent blade group insane cousin cute soda rotate memory hour vanish return couple library melody bargain oblige oil autumn guilt coffee rigid';
// Amount of NYM to be deposited 1GB = 1NYM
const amount = '1unym';

const opts = {
  useSandbox: true,
};

try {
  await createBandwithCredential(mnemonic, amount, opts);
  console.log('Bandwith credential created');
} catch (error) {
  console.error('Not able to create credential');
  console.error(error);
}
