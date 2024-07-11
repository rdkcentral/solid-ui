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

import type { Meta, StoryObj } from 'storybook-solidjs';
import Key from './Key.jsx';
import keyStyles from './Key.styles.js';

type Story = StoryObj<typeof Key>;

const meta: Meta<typeof Key> = {
  title: 'Components/Key',
  tags: ['autodocs'],
  component: Key,
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
    textAlign: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
      description: 'Sets the alignment for the text',
      table: {
        defaultValue: { summary: 'center' }
      }
    }
  }
};

export const Basic: Story = {
  render: args => {
    return <Key {...args} tone={args.tone ?? keyStyles.tone} />;
  },
  args: {
    states: 'focus',
    keySpacing: 2,
    title: 'A'
  }
};

export const Space: Story = {
  render: args => {
    return <Key {...args} tone={args.tone ?? keyStyles.tone} size={'lg'} />;
  },
  args: {
    states: 'focus',
    keySpacing: 2,
    title: 'Space'
  }
};

export default meta;
