import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { wasm } from '@rollup/plugin-wasm';

/**
 * Gets the config for bundling the package as an ES Module.
 *
 * @param opts Options:
 *    `{ inlineWasm: boolean }` - set inline to true to inline the web worker in the main bundle
 *    `{ outputDir: string }` - override the destination *
 */
export const getConfig = (opts) => ({
  input: 'src/index.ts',
  output: {
    dir: opts.outputDir || 'dist/esm',
    format: 'es',
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts'] }),
    commonjs(),
    // this is some nasty monkey patching that removes the WASM URL (because it is handled by the `wasm` plugin)
    // replace({
    //   values: { "input = new URL('nym_credential_client_wasm_bg.wasm', import.meta.url);": 'input = undefined;' },
    //   delimiters: ['', ''],
    //   preventAssignment: true,
    // }),
    opts?.inlineWasm === true
      ? wasm({ maxFileSize: 20_000_000, targetEnv: 'browser' }) // force the wasm plugin to embed the wasm bundle - this means no downstream bundlers have to worry about handling it
      : wasm({
          targetEnv: 'browser',
          fileName: '[name].wasm',
        }),
    typescript({ compilerOptions: { outDir: opts.outputDir || 'dist/esm' } }),
  ],
});
