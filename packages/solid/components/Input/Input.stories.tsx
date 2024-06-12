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

import Input from './Input.jsx';
import type { Meta, StoryObj } from 'storybook-solidjs';
import { createSignal } from 'solid-js';
import { View, hexColor } from '@lightningtv/solid';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: 'color of Input',
      control: 'color'
    },
    height: {
      description: 'height of Input',
      control: 'number'
    },
    width: {
      description: 'width of Input',
      control: 'number'
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    }
  }
};

export default meta;

export const Basic: Story = {
  render: args => {
    const [keyPress, setKeyPress] = createSignal('');
    const [title, setTitle] = createSignal('');

    const handleKeyPress = e => {
      setKeyPress(e.key);
    };

    return (
      <View onKeyPress={handleKeyPress}>
        <Input
          {...args}
          autofocus
          backgroundColor={hexColor(args.backgroundColor) || undefined}
          keyEvent={[keyPress, setKeyPress]}
          titleSignal={[title, setTitle]}
        />
      </View>
    );
  },
  args: {}
};
