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
import type { DetailsProps } from './Details.types.js';

export interface MetadataProps extends UIComponentProps, MetadataStyleProperties {
  /**
   * title text
   */
  title: string;

  /**
   * description text
   */
  description?: string;

  /**
   * Text, Badges, and Icons to be displayed below the title and description
   */
  details?: DetailsProps;

  /**
   * max number of lines for text
   */
  maxLines?: number;

  children?: NodeProps['children'];
}

export interface MetadataStyleProperties {
  /**
   * placement of content in metadata
   */
  justifyContent?: NodeStyles['justifyContent'];

  /**
   * color of text in metadata
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: TextStyles['color'];
  alpha?: TextStyles['alpha'];
}

export interface MetadataStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  DescriptionText: TextStyleSet;
  TitleText: TextStyleSet;
}

export type MetadataConfig = ComponentStyleConfig<MetadataStyleProperties>;
