/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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

import type { NodeStyles, TextProps } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone, TextStyleSet } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface BadgeProps extends UIComponentProps, BadgeStyleProperties {
  /**
   * Badge text
   */
  title?: TextProps['children'];
}

export type BadgeStyleProperties = Partial<{
  /**
   * solid color background of badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor: NodeStyles['color'];

  /**
   * color of text within badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor: NodeStyles['color'];

  /**
   * color of icon within badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  iconColor: NodeStyles['color'];

  /**
   * color of border around badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  // strokeColor: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  // strokeWidth: NodeStyles['borderWidth']; // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)

  /**
   * spacing between badge items
   */
  contentSpacing: NodeStyles['itemSpacing'];

  /**
   * corner radius of badge
   */
  radius?: NodeStyles['borderRadius'];
}>;

export interface BadgeStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

export type BadgeConfig = ComponentStyleConfig<BadgeStyleProperties>;
