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
import Keyboard, { type KeyboardProps } from './Keyboard.jsx';
import Column from '../Column/Column.jsx';
import Input from '../Input/Input.jsx';
import type { Tone } from '../../types/types.js';
import { type KeyboardStyles } from './Keyboard.styles.js';

export interface KeyboardInputProps extends KeyboardProps {
  /**
   * non-reactive index of the current cursor currentPosition of the input
   */
  position?: number;
  /**
   * signal passed in to represent the actual title within the input
   */
  titleSignal: Signal<string>;

  style?: Partial<KeyboardStyles>;

  tone?: Tone;
}

// rows created from each array passed in
const KeyboardInput: Component<KeyboardInputProps> = (props: KeyboardInputProps) => {
  // signal representing a string of the key pressed and a boolean for if value has been added to the input yet
  // eslint-disable-next-line solid/reactivity
  const keyEvent = createSignal('');

  return (
    <Column autofocus={props.autofocus} selected={1} scroll={'none'}>
      <Input position={props.position} keyEvent={keyEvent} titleSignal={props.titleSignal} />
      <Keyboard
        centerKeyboard={props.centerKeyboard}
        keySpacing={props.keySpacing}
        defaultFormat={props.defaultFormat}
        keySignal={keyEvent}
        formats={props.formats}
        centerKeys={props.centerKeys}
        width={1000}
        style={props.style}
      />
    </Column>
  );
};

export default KeyboardInput;
