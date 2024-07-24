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

import type { ElementNode, IntrinsicNodeCommonProps, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';
import type { KeyHandler } from '@lightningtv/solid/primitives';

export interface ColumnProps extends UIComponentProps, ColumnStyleProperties {
  /** function run on component mount */
  onCreate?: IntrinsicNodeCommonProps['onCreate'];

  /** function to be called on down click */
  onDown?: KeyHandler;

  /** function to be called on up click */
  onUp?: KeyHandler;

  /** function to be called when the selected of the component changes */
  onSelectedChanged?: (
    this: ElementNode,
    elm: ElementNode,
    active: ElementNode,
    selectedIndex: number,
    lastSelectedIndex: number
  ) => void;

  /** Determines when to scroll(shift items along the axis):
   * auto - scroll items immediately
   * edge - scroll items when focus reaches the last item on screen
   * always - focus remains at index 0, scroll until the final item is at index 0
   * none - disable scrolling behavior, focus shifts as expected
   * in both `auto` and `edge` items will only scroll until the last item is on screen */
  scroll?: 'always' | 'none' | 'edge' | 'auto';

  /** When auto scrolling, item index at which scrolling begins */
  scrollIndex?: number;

  /** The initial index */
  selected?: number;
}

export interface ColumnStyleProperties {
  /**
   * the index of which we want scrolling to start
   */
  scrollIndex?: number;

  itemSpacing?: NodeStyles['gap'];

  itemTransition?: NodeStyles['transition'];
}

export interface ColumnStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

export type ColumnConfig = ComponentStyleConfig<ColumnStyleProperties>;
