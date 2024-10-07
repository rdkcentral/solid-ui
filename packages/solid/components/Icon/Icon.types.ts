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

import type { NodeStyles, NodeProps } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface IconProps extends UIComponentProps {
  /**
   * icon color (can only be applied on png icons)
   */
  color?: UIComponentProps['color'];

  /**
   * icon height
   */
  height?: NodeProps['height'];

  /**
   * path to image or inline SVG XML
   */
  src?: NodeProps['src'];

  /**
   * icon width
   */
  width?: NodeProps['width'];
}

export interface IconStyleProperties {
  /**
   * icon color
   */
  color?: NodeStyles['color'];
}

export interface IconStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

export type IconConfig = ComponentStyleConfig<IconStyleProperties>;
