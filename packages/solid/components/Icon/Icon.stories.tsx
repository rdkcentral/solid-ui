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

import Icon from './Icon.jsx';
import type { Meta, StoryObj } from 'storybook-solidjs';
import lightning from 'assets/images/ic_lightning_white_32.png';
import { hexColor } from '@lightningtv/solid';

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of icon',
      control: 'color'
    },
    height: {
      description: 'height of icon',
      control: 'number'
    },
    width: {
      description: 'width of icon',
      control: 'number'
    },
    /* fixed: {
      description: "when `true`, icon width and height will not dynamically resize",
      control: {type: 'boolean'}
    }, */
    src: {
      description: 'path to image or inline SVG XML'
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

export const PNG: Story = {
  render: args => {
    return <Icon {...args} color={hexColor(args.color) || undefined} />;
  },
  args: {
    width: 100,
    height: 100,
    src: lightning,
    tone: 'neutral'
  }
};

/** Potentially not compatible with SVG */

/* export const SVG = {
  args: {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>',
    fixed: true
  }
}; */
