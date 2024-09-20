/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import { View, type IntrinsicNodeStyleProps } from '@lightningtv/solid';
import Column from '../components/Column/Column.jsx';
import Row from '../components/Row/Row.jsx';
import { createSelector, createSignal, For } from 'solid-js';

const meta: Meta = {
  title: 'Recipes/Grid'
};

export default meta;

const tileStyle: IntrinsicNodeStyleProps = {
  width: 300,
  height: 100,
  borderRadius: 8,
  border: {
    width: 2,
    color: 0x00000000
  },
  focus: {
    border: {
      width: 4,
      color: 0xffffffff
    }
  }
};

const Tile = props => <View {...props} style={tileStyle} />;

export const Grid: StoryObj = {
  render: () => (
    <Column autofocus plinko>
      <Row height={100}>
        <Tile color={0xa32eacff} />
        <Tile color={0xa32eacff} />
        <Tile color={0xa32eacff} />
        <Tile color={0xa32eacff} />
      </Row>
      <Row height={100}>
        <Tile color={0x23adccff} />
        <Tile color={0x23adccff} />
        <Tile color={0x23adccff} />
        <Tile color={0x23adccff} />
      </Row>
      <Row height={100}>
        <Tile color={0x23cc37ff} />
        <Tile color={0x23cc37ff} />
        <Tile color={0x23cc37ff} />
        <Tile color={0x23cc37ff} />
      </Row>
      <Row height={100}>
        <Tile color={0xcd8518ff} />
        <Tile color={0xcd8518ff} />
        <Tile color={0xcd8518ff} />
        <Tile color={0xcd8518ff} />
      </Row>
    </Column>
  )
};

export const GridActiveRow: StoryObj = {
  render: () => {
    const Colors = [0xa32eacff, 0x23adccff, 0x23cc37ff, 0xcd8518ff];
    const highlightRow = { color: 0x00ff00ff, active: { color: 0xff0000ff } };
    const [selectedIndex, setSelectedIndex] = createSignal(0);
    const isSelected = createSelector(selectedIndex);
    return (
      <Column autofocus plinko onSelect={setSelectedIndex}>
        <For each={Colors}>
          {(color, index) => (
            <Row height={100} states={{ active: isSelected(index()) }} style={highlightRow}>
              <Tile color={color} marginLeft={8} />
              <Tile color={color} />
              <Tile color={color} />
              <Tile color={color} />
            </Row>
          )}
        </For>
      </Column>
    );
  }
};
