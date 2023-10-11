import { getConfig } from './rollup/esm.mjs';

export default {
  ...getConfig({
    // by default, the web worker will not be inlined, in local development mode it will be
    inline: process.env.NYM_CREDENTIALS_DEV_MODE === 'true',
  }),
};
