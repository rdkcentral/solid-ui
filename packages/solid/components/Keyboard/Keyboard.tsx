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

import { type Component, type Signal } from 'solid-js';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles, { type KeyboardStyleProperties } from './Keyboard.styles.js';
import KeyboardSimple from './KeyboardSimple.jsx';
import type { KeyProps } from '../Key/Key.jsx';

export type KeyboardFormat = Array<Array<string | KeyProps>>;

export interface KeyboardProps extends UIComponentProps {
  /**
   * object containing arrays that represent different formats that the keyboard can be presented in. These arrays can contain strings or objects.
   */
  formats: KeyboardFormat;

  /**
   * center the keyboard within it's set width (must set the w property of Keyboard)
   */
  centerKeyboard?: boolean;

  /**
   * center the keys within it's set width (must set the w property of Keyboard)
   */
  centerKeys?: boolean;

  /**
   * Default format of the keyboard to be shown. Should be a key of `formats`.
   */
  defaultFormat?: string;

  /**
   * returns the value of the activated key
   */
  keySignal: Signal<string>;

  /**
   * gap between keys
   */
  keySpacing: KeyboardStyleProperties['keySpacing'];
}

// rows created from each array passed in
const Keyboard: Component<KeyboardProps> = (props: KeyboardProps) => {
  return (
    <KeyboardSimple
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Keyboard;
