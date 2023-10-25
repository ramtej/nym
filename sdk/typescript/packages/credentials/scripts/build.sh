#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

rm -rf dist || true

#-------------------------------------------------------
# ESM
#-------------------------------------------------------

# build the SDK as a ESM bundle
rollup -c rollup-esm.config.mjs

#-------------------------------------------------------
# COMMON JS
#-------------------------------------------------------
# Some old build systems cannot fully handle ESM or ES2021, so build
# a CommonJS bundle targeting ES5

# build the SDK as a CommonJS bundle
rollup -c rollup-cjs.config.mjs

#-------------------------------------------------------
# ESM (full-fat)
#-------------------------------------------------------

# build the SDK as a ESM bundle (with wasm inlined as a blob)
rollup -c rollup-esm-full-fat.config.mjs

#-------------------------------------------------------
# COMMON JS (full-fat)
#-------------------------------------------------------
# Some old build systems cannot fully handle ESM or ES2021, so build
# a CommonJS bundle targeting ES5

# build the SDK as a CommonJS bundle (with wasm inlined as a blob)
rollup -c rollup-cjs-full-fat.config.mjs

#-------------------------------------------------------
# CLEAN UP
#-------------------------------------------------------

# copy README
cp README.md dist/esm
cp README-CommonJS.md dist/cjs/README.md
cp README-CommonJS-full-fat.md dist/cjs-full-fat/README.md
cp README-full-fat.md dist/esm-full-fat/README.md


