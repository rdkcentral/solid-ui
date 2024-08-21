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
import type { NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';
import type { KeyProps, KeySizes } from '../Key/Key.types.js';
import type { Signal } from 'solid-js';

export interface KeyboardProps extends UIComponentProps, KeyboardStyleProperties {
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
   * Wrap the keyboard so active goes back to the beginning of the row
   */
  rowWrap: boolean;
}

export interface KeyboardBaseProps extends KeyboardProps {
  /**
   * object containing arrays that represent different formats that the keyboard can be presented in. These arrays can contain strings or objects.
   */
  formats: KeyboardFormat;
}

export type KeyboardFormat = Record<string, Array<Array<string | Partial<KeyProps>>>>;

export interface KeyboardStyleProperties {
  /**
   * space between each keys
   */
  keySpacing?: NodeStyles['gap'];

  /**
   * width of display screen
   */
  screenW?: number;

  /**
   * space to the left and right of keyboard content; used for centering Keyboard
   */
  marginX?: number;

  /**
   * color of the text within the keyboard
   */
  textColor?: NodeStyles['color'];

  /**
   * height of keys in keyboard
   */
  keyHeight?: number;
}

export interface KeyboardStyles {
  tone: Tone;
  Container: NodeStyleSet<{ keySpacing?: number; screenW?: number; marginX?: number; keyHeight?: number }>;
  Key: NodeStyleSet<{ baseWidth: number; sizes: KeySizes; contentColor: NodeStyles['color'] }>;
  Text: TextStyleSet;
}

export type KeyboardConfig = ComponentStyleConfig<KeyboardStyleProperties>;
