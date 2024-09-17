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

const config = {
  stories: ['../components/**/*.stories.@(ts|tsx)', '../components/**/*.mdx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // disable background addon
        outline: false, // disable outline addon
        measure: false, // disable measure addon
        viewport: false // disable viewport addon
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.storybook.js'
      }
    }
  },
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: 'react-docgen',
    check: false
  }
  // docs: {
  //   autodocs: 'tag'
  // }
};
export default config;
