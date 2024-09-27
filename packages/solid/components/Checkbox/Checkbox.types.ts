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
import type { NodeProps, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface CheckboxProps extends UIComponentProps, CheckboxStyleProperties {
  /**
   * Indicates whether the checkbox is checked or unchecked.
   * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  children?: NodeProps['children'];
}

export interface CheckboxStyleProperties {
  /**
   * color of background when checkbox is checked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColorChecked?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (checked.color)
  /**
   * color of background when checkbox is unchecked
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];

  /**
   * color and width of the checkbox border
   */
  border?: NodeStyles['border'];
  /**
   * radius of the border of checkbox
   */
  radius?: NodeStyles['borderRadius'];
  /**
   * placement of content in checkbox
   */
  justifyContent?: NodeStyles['justifyContent'];
  // /**
  //  * color of border around checkbox
  //  *
  //  * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
  //  */
  // strokeColor?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  /**
   * width of border around checkbox
   */
  // strokeWidth?: NodeStyles['borderWidth']; // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
  /**
   * width of icon in the checkbox
   *
   * only applied to built-in icons, ignored if child component is passed
   */
  checkWidth?: NodeStyles['width'];
  /**
   * height of icon in the checkbox
   *
   * only applied to built-in icons, ignored if child component is passed
   */
  checkHeight?: NodeStyles['height'];
}

export interface CheckboxStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Icon: NodeStyleSet;
}

export type CheckboxModes = 'checked' | 'focus' | 'disabled';

export type CheckboxConfig = ComponentStyleConfig<CheckboxStyleProperties, CheckboxModes>;
