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

import ProgressBar from './ProgressBar.js';
import type { Meta, StoryObj } from 'storybook-solidjs';
import theme from 'theme';
import { hexColor } from '@lightningtv/solid';

type Story = StoryObj<typeof ProgressBar>;

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'color of bar representing the total progress',
      control: 'color'
    },
    progressColor: {
      description: 'color of bar representing the current progress',
      control: 'color'
    },
    progress: {
      description: 'Percentage of current progress in a decimal format from 0 to 1',
      control: { type: 'number', step: 0.1, min: 0, max: 1.0 }
    },
    radius: {
      description: 'Radius of the bar',
      control: { type: 'number', step: 1, min: 0, max: 50 }
    }
  }
};

export default meta;

export const Basic: Story = {
  render: args => {
    return (
      <ProgressBar
        {...args}
        progressColor={hexColor(args.progressColor) || undefined}
        color={hexColor(args.color) || undefined}
      />
    );
  },
  args: {
    width: 500,
    height: theme.spacer.md,
    progress: 0.5,
    radius: theme.radius.xs
  }
};
