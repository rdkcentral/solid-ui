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
import type { BorderStyleObject, NodeProps, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface RadioProps extends UIComponentProps, RadioStyleProperties {
  /**
   * Indicates whether the Radio is checked or unchecked.
   * Setting this to `true` will fill the Radio, and setting it to `false` will empty it.
   */
  checked?: boolean;

  children?: NodeProps['children'];
}

export interface RadioStyleProperties {
  /**
   * color of background when radio is unchecked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];

  /**
   * color of background then radio is checked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColorChecked?: NodeStyles['color'];

  /**
   * width of knob in the radio
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobWidth?: NodeStyles['width'];

  /**
   * height of knob in the radio
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobHeight?: NodeStyles['height'];

  /**
   * padding of knob in the radio
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobPadding?: number;

  /**
   * radius of knob in the radio
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobRadius?: NodeStyles['borderRadius'];

  /**
   * color of knob in the radio
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobColor?: NodeStyles['color'];

  /**
   * color of knob in the radio when checked
   *
   * only applied to built-in knob, ignored if child component is passed
   */
  knobColorChecked?: NodeStyles['color'];

  // /**
  //  * color of border around radio
  //  *
  //  * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
  //  */
  // strokeColor?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)

  // /**
  //  * width of border around radio
  //  */
  // strokeWidth?: NodeStyles['borderWidth']; // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)

  // /**
  //  * radius of the border of radio
  //  */
  // strokeRadius?: NodeStyles['borderRadius'];

  /**
   * radius of the border of radio
   */
  radius?: NodeStyles['borderRadius'];
}

export interface RadioStyles {
  tone: Tone;
  Container: NodeStyleSet<{ border: BorderStyleObject; colorChecked: NodeStyles['color'] }>;
  Knob: NodeStyleSet<{ padding: number; colorChecked: NodeStyles['color'] }>;
}

export type RadioModes = 'checked' | 'focus' | 'disabled';

export type RadioConfig = ComponentStyleConfig<RadioStyleProperties, RadioModes>;
