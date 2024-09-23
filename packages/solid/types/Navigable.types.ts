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
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ElementNode, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from './types.js';
import type { UIComponentProps } from './interfaces.js';

/** These interfaces describe a component that handles navigation events by implementing the
 * [handleNavigation](https://github.com/rdkcentral/solid-ui/blob/main/packages/solid/utils/handleNavigation.ts) utility,
 * currently the Column and Row
 */

export interface NavigableProps extends UIComponentProps, NavigableStyleProperties {
  /** function to be called when the selected of the component changes */
  onSelectedChanged?: (
    this: NavigableElement,
    selectedIndex: number,
    elm: NavigableElement,
    active: ElementNode,
    lastSelectedIndex?: number
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

  /**
   * Adjust the x position of the row. Initial value is Y
   */
  offset?: number;

  /**
   * Plinko - sets the selected item of the next row to match the previous row
   */
  plinko?: boolean;

  /**
   * Wrap the row so active goes back to the beginning of the row
   */
  wrap?: boolean;
}

// @ts-expect-error animationSettings is not identical - weird
export interface NavigableElement extends ElementNode, NavigableProps {}

export interface NavigableStyleProperties {
  /**
   * the index of which we want scrolling to start
   */
  scrollIndex?: number;
  /**
   * space between each keys
   */
  itemSpacing?: NodeStyles['gap'];
  /**
   * animation transition
   */
  itemTransition?: NodeStyles['transition'];
}

export interface NavigableStyles {
  tone: Tone;
  Container: NodeStyleSet;
}

export type NavigableConfig = ComponentStyleConfig<NavigableStyleProperties>;
