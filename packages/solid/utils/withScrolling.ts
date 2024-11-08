/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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

import type { ElementNode, ElementText, INode, Styles } from '@lightningtv/core';

// Adds properties expected by withScrolling
export interface ScrollableElement extends ElementNode {
  scrollIndex?: number;
  selected?: number;
  offset?: number;
  _targetPosition?: number;
  _screenOffset?: number;
}

// From the renderer, not exported
const InViewPort = 8;
const isNotShown = (node: ElementNode | ElementText) => {
  return node.lng.renderState !== InViewPort;
};
/*
  Auto Scrolling starts scrolling right away until the last item is shown. Keeping a full view of the list.
  Edge starts scrolling when it reaches the edge of the viewport.
  Always scroll moves the list every time
*/

export function withScrolling(isRow: boolean) {
  const dimension = isRow ? 'width' : 'height';
  const axis = isRow ? 'x' : 'y';

  return (
    selected: number | ScrollableElement,
    componentRef?: ScrollableElement,
    selectedElement?: ElementNode | ElementText,
    lastSelected?: number
  ) => {
    if (typeof selected !== 'number') {
      componentRef = selected;
      selected = componentRef.selected || 0;
    }
    if (!componentRef.children.length) return;

    const lng = componentRef.lng as INode;
    const screenSize = isRow ? lng.stage.root.width : lng.stage.root.height;
    // Determine if movement is incremental or decremental
    const isIncrementing = lastSelected === undefined || lastSelected - 1 !== selected;

    if (componentRef._screenOffset === undefined) {
      componentRef._screenOffset = componentRef.offset ?? (isRow ? lng.absX : lng.absY) - componentRef[axis];
    }

    const screenOffset = componentRef._screenOffset;
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || 'auto';

    // Allows manual position control
    const targetPosition = componentRef._targetPosition ?? componentRef[axis];
    const rootPosition = isIncrementing
      ? Math.min(targetPosition, componentRef[axis])
      : Math.max(targetPosition, componentRef[axis]);
    componentRef.offset = componentRef.offset ?? rootPosition;
    const offset = componentRef.offset;
    selectedElement = selectedElement || componentRef.children[selected];
    const selectedPosition = selectedElement[axis] ?? 0;
    const selectedSize = selectedElement[dimension] ?? 0;
    const selectedScale = selectedElement.scale ?? (selectedElement.style?.focus as Styles)?.scale ?? 1;
    const selectedSizeScaled = selectedSize * selectedScale;
    const containerSize = componentRef[dimension] ?? 0;
    const maxOffset = Math.min(screenSize - containerSize - screenOffset - 2 * gap, 0);

    // Determine the next element based on whether incrementing or decrementing
    const nextIndex = isIncrementing ? selected + 1 : selected - 1;
    const nextElement = componentRef.children[nextIndex] || null;

    // Default nextPosition to align with the selected position and offset
    let nextPosition = rootPosition;

    // Update nextPosition based on scroll type and specific conditions
    if (selectedElement.centerScroll) {
      nextPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2;
    } else if (scroll === 'always') {
      nextPosition = -selectedPosition + offset;
    } else if (scroll === 'center') {
      nextPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2 - screenOffset;
    } else if (!nextElement) {
      // If at the last element, align to end
      nextPosition = isIncrementing ? maxOffset : offset;
    } else if (scroll === 'auto') {
      if (
        isIncrementing &&
        componentRef.scrollIndex > 0 &&
        componentRef.selected >= componentRef.scrollIndex
      ) {
        nextPosition = rootPosition - selectedSize - gap;
      } else if (isIncrementing) {
        nextPosition = -selectedPosition + offset;
      } else {
        nextPosition = rootPosition + selectedSize + gap;
      }
    } // Handle Edge scrolling
    else if (isIncrementing && isNotShown(nextElement)) {
      nextPosition = rootPosition - selectedSize - gap;
    } else if (isNotShown(nextElement)) {
      nextPosition = -selectedPosition + offset;
    }

    // Prevent container from moving beyond bounds
    nextPosition =
      isIncrementing && scroll !== 'always'
        ? Math.max(nextPosition, maxOffset)
        : Math.min(nextPosition, offset);

    // Update position if it has changed
    if (componentRef[axis] !== nextPosition) {
      componentRef[axis] = nextPosition;
      // Store the new position to keep track during animations
      componentRef._targetPosition = nextPosition;
    }
  };
}
