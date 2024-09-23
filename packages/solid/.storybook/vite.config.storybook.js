/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * removes hexColorTransform plugin which breaks the storybook build
 */

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

const config = {
  plugins: [
    solidPlugin({
      solid: {
        moduleName: '@lightningtv/solid',
        generate: 'universal'
      }
    })
  ],
  base: './',
  build: {
    lib: {
      fileName: 'index',
      entry: './index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['theme', 'solid-js', '@lightningtv/solid']
    },
    minify: false,
    sourcemap: true,
    outDir: './dist'
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, '../../l3-ui-theme-base/theme.js'),
      utils: path.resolve(__dirname, '../../shared/utils/index.ts'),
      types: path.resolve(__dirname, '../types/')
    },
    dedupe: ['solid-js', '@lightningtv/solid']
  },
  server: {
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  publicDir: '../shared/public'
};

export default defineConfig(config);
