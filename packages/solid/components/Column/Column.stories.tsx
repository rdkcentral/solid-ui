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

import Column from './Column.jsx';
import type { ColumnProps } from './Column.types.js';
import Button from '../Button/Button.jsx';
import type { JSX } from 'solid-js/jsx-runtime';
import { View } from '@lightningtv/solid';

const meta = {
  title: 'Components/Column',
  component: Column,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a column',
      table: {
        defaultValue: { summary: '[]' }
      }
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'the focus will loop back to the beginning of the list after reaching the last item',
      table: {
        defaultValue: { summary: false }
      }
    },
    scroll: {
      control: { type: 'radio' },
      options: ['auto', 'edge', 'always', 'none'],
      description: 'determines when to scroll',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;

// create an array of buttons to use in column
const createItems = (length: number) => {
  return Array.from({ length }).map((_, i) => {
    const button = (
      <Button width={300} height={100}>
        Button {`${i + 1}`}
      </Button>
    );
    return button;
  });
};

const buttons = () => <>{createItems(7)}</>;

export const AlwaysScroll = {
  render: (args: JSX.IntrinsicAttributes & ColumnProps) => {
    return (
      <View height={720} width={400}>
        <Column autofocus {...args} />;
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'always',
    wrap: false,
    y: 0
  }
};

export const NoneScroll = {
  render: (args: JSX.IntrinsicAttributes & ColumnProps) => {
    return (
      <View height={720} width={400}>
        <Column autofocus {...args} />;
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'none',
    wrap: false,
    y: 0
  }
};
