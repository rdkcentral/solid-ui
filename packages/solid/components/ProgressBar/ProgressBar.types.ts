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

import type { NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';

export interface ProgressBarProps extends UIComponentProps, ProgressBarStyleProperties {
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;
}

export interface ProgressBarStyleProperties {
  /**
   * total height of the component
   */
  height?: NodeStyles['height'];
  /**
   * color of the overlay portion of the progress bar
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  progressColor?: NodeStyles['color'];
  /**
   * color of the background portion of the progress bar
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  barColor?: NodeStyles['color'];
  /**
   * border radius of the progressBar
   */
  radius?: NodeStyles['borderRadius'];
}

export interface ProgressBarStyles {
  tone: Tone;
  Container: NodeStyleSet;
  ProgressBar: NodeStyleSet;
}

export type ProgressBarConfig = ComponentStyleConfig<ProgressBarStyleProperties>;
