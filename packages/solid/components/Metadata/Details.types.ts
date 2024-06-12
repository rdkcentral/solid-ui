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
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';
import type { BadgeProps } from '../Badge/Badge.types.js';
import type { RatingProps } from './Rating.types.js';

export interface DetailsProps extends UIComponentProps, DetailsStyleProperties {
  /**
   * an array of BadgeProps to render [Badges](?path=/docs/components-badge--docs)
   */
  badges?: BadgeProps[];
  /**
   * an array of RatingProps to render ratings
   */
  ratings?: RatingProps[];
  /**
   * text to display as details title
   */
  title?: string;
  children?: NodeProps['children'];
}

export interface DetailsStyleProperties {
  /**
   * alignment of items in details
   */
  alignItems?: NodeStyles['alignItems'];
  /**
   * The space between items in the details
   */
  contentSpacing?: number;
  /**
   * The space between individual badges in the details
   */
  badgeContentSpacing?: number;
  /**
   * The space between individual ratings in the details
   */
  ratingContentSpacing?: number;
  /**
   * color of text in details
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: NodeStyles['color'];
}

export interface DetailsStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    badgeContentSpacing: number;
    contentSpacing: number;
    ratingContentSpacing: number;
  }>;
  Text: TextStyleSet;
}
export type DetailsConfig = ComponentStyleConfig<DetailsStyleProperties>;
