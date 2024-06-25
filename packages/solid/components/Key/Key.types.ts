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
import type { NodeProps, NodeStyles, TextStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface KeyProps extends UIComponentProps, KeyStyleProperties {
  /**
   * text content of the key
   */
  title?: string;

  /**
   * url for icon
   */
  icon?: NodeProps['src']; // TODO this isn't used
  /**
   * width of the Key
   */
  size?: KeySize;
  /**
   * path to image or inline SVG XML
   */
  src?: NodeProps['src'];
  /**
   * The horizontal spacing between each key in a Keyboard. This value is factored into the width of the key so that it aligns with with the borders of other keys in a Keyboard.
   */
  keySpacing?: number;
  /**
   * If true, pressing the key will trigger the $toggleKeyboard event. If false, the key will trigger the $onSoftKey event.
   */
  toggle?: string;
}
export type KeySize = keyof KeySizes;

export type KeySizes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export interface KeyStyleProperties {
  /**
   * background color of the key
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];

  /**
   * border radius of the key
   */
  borderRadius?: NodeStyles['borderRadius'];

  /**
   * space between each keys
   */
  keySpacing?: NodeStyles['gap'];

  /**
   * color of the content of the key
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  contentColor?: NodeStyles['color'];
  /**
   * where the content is aligned within the button
   */
  justify?: NodeStyles['justifyContent'];

  /**
   * color of the text within the key
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: TextStyles['color'];

  /**
   * The base width of a key. This value will be multiplied based on the size property of the key
   */
  baseWidth?: NodeStyles['width'];

  /**
   * used to determine the width of key, contains the properties sm, md, lg, xl
   */
  sizes?: KeySizes;
}

export interface KeyStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    padding: number[];
    sizes: KeySizes;
    baseWidth: number;
    keySpacing: number;
    contentColor: NodeStyles['color'];
  }>;
  Text: TextStyleSet;
}

export type KeyConfig = ComponentStyleConfig<KeyStyleProperties>;
