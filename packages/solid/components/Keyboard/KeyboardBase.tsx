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

import { For, Show, createMemo, createSignal, type Accessor, type Component } from 'solid-js';
import { combineStyles, ElementNode, View } from '@lightningtv/solid';
import Column from '../Column/Column.jsx';
import Row from '../Row/Row.jsx';
import Key from '../Key/Key.jsx';
import type { KeyProps } from '../Key/Key.types.js';
import styles from './Keyboard.styles.js';
import type { KeyboardBaseProps } from './Keyboard.types.js';
import keyStyles from '../Key/Key.styles.js';

/* eslint-disable solid/reactivity */
const getTone = (props: KeyboardBaseProps) => props.tone ?? styles.tone;

const getGap = (props: KeyboardBaseProps) =>
  props.gap ??
  props.keySpacing ??
  styles.Container.tones[props.tone ?? styles.tone]?.keySpacing ??
  styles.Container.base.keySpacing;

const getKeyHeight = (props: KeyboardBaseProps) =>
  props.keyHeight ??
  styles.Container.tones[props.tone ?? styles.tone]?.keyHeight ??
  styles.Container.base.keyHeight;

const getTotalWidth = (props: KeyboardBaseProps) =>
  props.screenW ??
  props.width ??
  styles.Container.tones[props.tone ?? styles.tone]?.width ??
  styles.Container.base.width;

const getMultiplier = (props: KeyProps) =>
  props.sizes?.[props.size ?? 'sm'] ??
  keyStyles.Container?.tones?.[props.tone ?? keyStyles.tone]?.sizes?.[props.size ?? 'sm'] ??
  keyStyles.Container.base.sizes[props.size ?? 'sm'];

const getBaseWidth = (props: KeyProps) =>
  props.baseWidth ??
  keyStyles.Container?.tones?.[props.tone ?? keyStyles.tone]?.baseWidth ??
  keyStyles.Container.base.baseWidth;

const getKeySpacing = (props: KeyProps) =>
  props.keySpacing ??
  keyStyles.Container.tones?.[props.tone ?? keyStyles.tone]?.keySpacing ??
  keyStyles.Container.base.keySpacing;
/* eslint-enable solid/reactivity */

const KeyboardBase: Component<KeyboardBaseProps> = (props: KeyboardBaseProps) => {
  // eslint-disable-next-line solid/reactivity
  const [_, setKeySignal] = props.keySignal ?? createSignal('');
  const [activeKeyboard, setActiveKeyboard] = createSignal('default');
  const [selectedRowIndex, setSelectedRowIndex] = createSignal(0);
  const [selectedColumnIndex, setSelectedColumnIndex] = createSignal(0);
  const [rowWidth, setRowWidth] = createSignal(0);

  const tone = createMemo(() => getTone(props));
  const gap = createMemo(() => getGap(props));
  const totalWidth = createMemo(() => getTotalWidth(props));
  const keyHeight = createMemo(() => getKeyHeight(props));
  const keyboardRefList = new Map<string, [ElementNode, number]>();

  const setOnEnter = (key: string | KeyProps, rowIdx: Accessor<number>, colIdx: Accessor<number>) => {
    if (typeof key === 'string') {
      return () => setKeySignal(key);
    } else if (key.toggle) {
      return () => {
        setSelectedRowIndex(rowIdx());
        setSelectedColumnIndex(colIdx());
        setActiveKeyboard(key.toggle);
        keyboardRefList[key.toggle]?.element?.setFocus();
        setRowWidth(keyboardRefList[key.toggle]?.width ?? 0);
      };
    } else {
      return () => setKeySignal(typeof key === 'string' ? key : (key.title ?? ''));
    }
  };

  const addKeyboardWidth = (keyboard: string) => {
    // largest row size
    let maxRow = 0;
    for (const row of props.formats[keyboard]) {
      // width of individual row
      let rowWidth = 0;
      for (const key of row) {
        let width = getBaseWidth(props);
        if (typeof key === 'object') {
          width = getMultiplier(key) * getBaseWidth(props) + getKeySpacing(props) * (getMultiplier(key) - 1);
        }
        rowWidth += width + getKeySpacing(props);
      }
      if (maxRow < rowWidth) {
        maxRow = rowWidth;
      }
    }
    return maxRow;
  };
  return (
    <View
      {...props}
      forwardFocus={0}
      style={combineStyles(
        props.style, //
        styles.Container.tones[tone()],
        styles.Container.base
      )}
      width={totalWidth()}
      // height is defined by the height of the keys, the number of rows, as well as the gap between them
      height={undefined}
    >
      <For each={Object.keys(props.formats)}>
        {keyboard => (
          <Show when={activeKeyboard() === keyboard}>
            <View
              ref={element => {
                keyboardRefList[keyboard] = { element: element, width: addKeyboardWidth(keyboard) };
                if (activeKeyboard() === keyboard) {
                  element.setFocus();
                  setRowWidth(keyboardRefList[keyboard]?.width ?? 0);
                }
                return keyboard;
              }}
              justifyContent={props.centerKeyboard ? 'center' : 'flexStart'}
              display={'flex'}
              forwardFocus={0}
            >
              <Column
                scroll={'none'}
                plinko
                selected={selectedColumnIndex()}
                alignItems={props.centerKeys || props.centerKeyboard ? 'center' : 'flexStart'}
                width={rowWidth()}
                gap={gap()}
              >
                <For each={props.formats[keyboard]}>
                  {(row, colIdx) => (
                    <Row
                      scroll={'none'}
                      selected={selectedRowIndex()}
                      flexBoundary={props.flexBoundary ?? 'contain'}
                      display={'flex'}
                      gap={gap()}
                      height={keyHeight()}
                      wrap={props.rowWrap}
                    >
                      <For each={row}>
                        {(key: string | KeyProps, rowIdx) => (
                          <Key
                            {...(typeof key === 'string' ? {} : key)}
                            onEnter={setOnEnter(key, rowIdx, colIdx)}
                            title={typeof key === 'string' ? key : (key.title ?? '')}
                            height={keyHeight()}
                          />
                        )}
                      </For>
                    </Row>
                  )}
                </For>
              </Column>
            </View>
          </Show>
        )}
      </For>
    </View>
  );
};

export default KeyboardBase;
