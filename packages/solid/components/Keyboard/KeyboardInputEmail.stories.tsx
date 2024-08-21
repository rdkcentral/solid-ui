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
import KeyboardInput from './KeyboardInput.jsx';
import { createSignal } from 'solid-js';

type Story = StoryObj<typeof KeyboardInput>;

const meta: Meta<typeof KeyboardInput> = {
  title: 'Components/KeyboardInput',
  tags: ['autodocs'],
  component: KeyboardInput,
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

export const Email: Story = {
  render: args => {
    // eslint-disable-next-line solid/reactivity
    const titleSignal = createSignal('');

    return <KeyboardInput {...args} titleSignal={titleSignal} />;
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: undefined
  }
};

export default meta;
