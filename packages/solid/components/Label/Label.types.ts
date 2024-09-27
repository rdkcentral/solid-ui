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
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface LabelProps extends UIComponentProps, LabelStyleProperties {
  /**
   * text to display in label
   */
  title: string;
}

export interface LabelStyleProperties {
  /**
   * color of background of the label
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];

  /**
   * color of text in the label
   */
  textColor?: NodeStyles['color'];

  /**
   * padding around the text in the label
   */
  padding?: [number, number]; //  CLEW uses paddingY and paddingX, combined in just padding

  /**
   * border radius of the label
   */
  radius?: NodeStyles['borderRadius'];
}

export interface LabelStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Text: TextStyleSet;
}

export type LabelConfig = ComponentStyleConfig<LabelStyleProperties>;
