import { getConfig } from './rollup/esm.mjs';

export default {
  ...getConfig({
    inlineWasm: true,
    outputDir: 'dist/esm-full-fat',
  }),
};
