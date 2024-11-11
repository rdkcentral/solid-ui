/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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

import Row from './Row.jsx';
import Button from '../Button/Button.jsx';
import { View } from '@lightningtv/solid';

const meta = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a Row',
      table: {
        defaultValue: { summary: '[]' }
      }
    },
    scroll: {
      control: { type: 'radio' },
      options: ['auto', 'edge', 'always', 'none'],
      description: 'determines when to scroll',
      table: {
        defaultValue: { summary: false }
      }
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'the focus will loop back to the beginning of the list after reaching the last item',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;

// create an array of buttons to use in Row
const createItems = (length: number) => {
  return Array.from({ length }).map((_, i) => (
    <Button width={200} height={100}>
      Button {(i + 1).toString()}
    </Button>
  ));
};

const buttons = (num = 8) => createItems(num);

export const Basic = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    wrap: false,
    scroll: 'auto',
    x: 100
  }
};

export const edgeScroll = {
  render: args => {
    return (
      <Row autofocus {...args}>
        {buttons}
      </Row>
    );
  },
  args: {
    children: buttons,
    scroll: 'edge',
    wrap: false,
    x: 100
  }
};

export const AlwaysScroll = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'always',
    wrap: false,
    x: 100
  }
};

export const NoneScrollSmall = {
  render: args => {
    return (
      <View width={1000} height={720}>
        <Row autofocus {...args}>
          {buttons(3)}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'banana',
    wrap: false,
    x: 100
  }
};

export const NoneScroll = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons(6)}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'none',
    wrap: false,
    x: 0
  }
};

export const ScrollIndex = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scrollIndex: 4,
    wrap: false,
    x: 100
  }
};
