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
import { default as Custom } from './KeyboardCustom.jsx';
import { default as Dialpad } from './KeyboardDialpad.jsx';
import { default as DialpadExtended } from './KeyboardDialpadExtended.jsx';
import { default as Email } from './KeyboardEmail.jsx';
import { default as Number } from './KeyboardNumber.jsx';
import { default as Qwerty } from './KeyboardQwerty.jsx';

type Story = StoryObj<typeof Keyboard>;
type CustomStory = StoryObj<typeof Custom>;

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
      description: {
        component: 'A verity of button layouts to enable text input'
      }
    }
  },
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
  parameters: {
    docs: {
      description: {
        story: 'a simple keyboard for case-insensitive input'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeyboard: false,
    centerKeys: false,
    width: 1280
  }
};

export const KeyboardEmail: Story = {
  render: args => {
    return <Email {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a full featured keyboard with helpful shortcuts for email addresses'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export const KeyboardQwerty: Story = {
  render: args => {
    return <Qwerty {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a full featured keyboard for more complex text input'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export const KeyboardNumber: Story = {
  render: args => {
    return <Number {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a simple keyboard for numeric input'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export const KeyboardDialpad: Story = {
  render: args => {
    return <Dialpad {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a 3x4 numeric layout mimicking a phone keypad'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export const KeyboardDialpadExtended: Story = {
  render: args => {
    return <DialpadExtended {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a 3x4 numeric layout mimicking a phone keypad with a clear shortcut'
      }
    }
  },
  args: {
    states: 'focus',
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export const KeyboardCustom: CustomStory = {
  render: args => {
    return <Custom {...args} formats={args.formats} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'a custom keyboard can be created by providing a formats object'
      }
    }
  },
  args: {
    states: 'focus',
    formats: {
      default: [['A', 'B', 'C', 'D'], ['E', 'F', 'G'], ['H', 'I'], ['Z']]
    },
    autofocus: true,
    centerKeys: false,
    centerKeyboard: false,
    width: 1280
  }
};

export default meta;
