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
import Keyboard from './Keyboard.jsx';
import KeyboardSimple from './KeyboardSimple.jsx';

type Story = StoryObj<typeof Keyboard>;

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  tags: ['autodocs'],
  component: Keyboard,
  argTypes: {
    states: {
      control: { type: 'radio' },
      options: ['focus', 'unfocused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: 'focus' }
      }
    }
  }
};

export const Basic: Story = {
  render: args => {
    return <Keyboard {...args} />;
  },
  args: {
    states: 'focus',
    centerKeyboard: true,
    centerKeys: true,
    autofocus: true,
    formats: [
      [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        {
          title: 'Delete',
          size: 'md'
        }
      ],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      [
        {
          title: 'Clear',
          size: 'lg'
        },
        {
          title: 'Space',
          size: 'xl'
        },
        {
          title: 'Done',
          size: 'lg'
        }
      ]
    ]
  }
};

export const KeyboardSimple1: Story = {
  render: args => {
    return <KeyboardSimple {...args} />;
  },
  args: {
    states: 'focus',
    centerKeyboard: true,
    centerKeys: true,
    autofocus: true,
    formats: [
      [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        {
          title: 'Delete',
          size: 'md'
        }
      ],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      [
        {
          title: 'Clear',
          size: 'lg'
        },
        {
          title: 'Space',
          size: 'xl'
        },
        {
          title: 'Done',
          size: 'lg'
        }
      ]
    ]
  }
};

export default meta;
