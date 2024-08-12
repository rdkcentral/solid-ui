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

import { createSignal, type Component, type Signal } from 'solid-js';
import { View } from '@lightningtv/solid';
import KeyboardQwerty from './KeyboardQwerty.jsx';
import type { KeyboardProps } from './Keyboard.types.js';
import Column from '../Column/Column.jsx';
import Input from '../Input/Input.jsx';

export interface KeyboardInputProps extends KeyboardProps {
  /**
   * non-reactive index of the current cursor currentPosition of the input
   */
  position?: number;
  /**
   * signal passed in to represent the actual title within the input
   */
  titleSignal: Signal<string>;
}

const KeyboardInput: Component<KeyboardInputProps> = (props: KeyboardInputProps) => {
  // signal representing a string of the key pressed and a boolean for if value has been added to the input yet
  // eslint-disable-next-line solid/reactivity
  const keyEvent = createSignal('');

  return (
    <View {...props} forwardFocus={0}>
      <Column selected={1} scroll={'none'}>
        <Input {...props} keyEvent={keyEvent} />
        <KeyboardQwerty {...props} keySignal={keyEvent} />
      </Column>
    </View>
  );
};

export default KeyboardInput;
