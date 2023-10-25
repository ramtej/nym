import { getConfig } from './rollup/cjs.mjs';

export default {
  ...getConfig({
    inlineWasm: true,
    outputDir: 'dist/cjs-full-fat',
  }),
};
