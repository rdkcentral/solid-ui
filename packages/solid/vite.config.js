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

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { importChunkUrl } from '@lightningjs/vite-plugin-import-chunk-url';
import path from 'path';
// import vitePluginSolidUiThemeSwitcher from './utils/vitePluginSolidUiThemeSwitcher';
import vitePluginSolidUiCompiler from './utils/vitePluginSolidUiCompiler';

const config = {
  plugins: [
    solidPlugin({
      solid: {
        moduleName: '@lightningtv/solid',
        generate: 'universal'
      }
    }),
    importChunkUrl(),
    // vitePluginSolidUiThemeSwitcher({
    //   themes: {
    //     base: '@lightningjs/l3-ui-theme-base',
    //     mosaic: '/assets/themeStyles.l3.js'
    //   }
    // }),
    vitePluginSolidUiCompiler({
      theme: '/assets/themeStyles.l3.js'
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
      theme: path.resolve(__dirname, '../l3-ui-theme-base/theme.js'),
      utils: path.resolve(__dirname, '../shared/utils/index.ts')
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
  test: {
    browser: {
      enabled: true,
      headless: false,
      provider: 'playwright',
      name: 'chromium',
      slowHijackESM: false
    },
    deps: {
      // >= 0.34
      optimizer: {
        web: {
          include: ['@lightningjs/ui-components-theme-base']
        }
      }
    },
    testTransformMode: { web: ['/.[jt]sx?$/'] },
    globals: true
  },
  publicDir: '../shared/public'
};

export default defineConfig(config);
