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
import Checkbox from './Checkbox.jsx';
import Icon from '../Icon/Icon.jsx';
import checkboxStyles from '../Checkbox/Checkbox.styles.js';
import { combineStyles } from '@lightningtv/solid';

const icon = 'assets/images/ic_lightning_white_32.png';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    },
    checked: {
      description: 'Toggles checked between on and off',
      control: 'boolean'
    }
  }
};

export default meta;

export const Basic = {
  args: {
    checked: true,
    width: 40,
    height: 40
  }
};

export const WithIcon = {
  render: args => (
    <Checkbox {...args}>
      <Icon
        tone={args.tone}
        style={combineStyles(
          checkboxStyles.Icon.tones[args.tone ?? checkboxStyles.tone],
          checkboxStyles.Icon.base
        )}
        src={icon}
      />
    </Checkbox>
  ),
  args: {
    checked: true,
    width: 40,
    height: 40
  }
};
