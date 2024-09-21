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
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';
import type { IconProps } from '../Icon/Icon.types.jsx';

export interface RatingProps extends UIComponentProps, RatingStyleProperties {
  /**
   * path to the rating's icon
   */
  iconSrc: NonNullable<IconProps['src']>;
  /**
   * Text or number to display. Numbers from 0 to 100 will display as percentages.
   */
  title: string | number;
  children?: NodeProps['children'];
}

export interface RatingStyleProperties {
  /**
   * placement of items in rating
   */
  justifyContent?: NodeStyles['justifyContent'];

  /**
   * alignment of text in rating
   */
  textAlign?: TextStyles['textAlign'];

  /**
   * color of text in rating
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: TextStyles['color'];

  /**
   * The space between items in the rating
   */
  contentSpacing?: NodeStyles['gap'];

  /**
   * alignment of items in rating
   */
  alignItems?: NodeStyles['alignItems'];
}

export interface RatingStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

export type RatingConfig = ComponentStyleConfig<RatingStyleProperties>;
