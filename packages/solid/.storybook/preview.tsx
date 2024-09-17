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
/* @refresh reload */
import { createRenderer, Config, loadFonts } from '@lightningtv/solid';
import fonts from '../../shared/fonts';
import { themes } from '@storybook/theming';
import { useFocusManager } from '@lightningtv/solid/primitives';

Config.rendererOptions = {
  appWidth: 1280,
  appHeight: 720,
  deviceLogicalPixelRatio: 2 / 3,
  enableInspector: true
};

let dispose;

const preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true
    },
    docs: {
      theme: themes.dark,
      story: {
        inline: false,
        iframeHeight: '360px'
      },
      source: {
        type: 'code',
        language: 'tsx'
      }
    }
  },
  decorators: [
    Story => {
      const solidRoot = document.createElement('div');
      // teardown previous render (cleans up keyhandling)
      dispose && dispose();
      const { render } = createRenderer(undefined, solidRoot);
      loadFonts(fonts);

      dispose = render(() => {
        useFocusManager();
        return <Story />;
      });

      return solidRoot;
    }
  ]
};

export default preview;
