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

import type { ElementNode, ElementText, INode } from '@lightningtv/core';

// adds properties expected by withScrolling
export interface ScrollableElement extends ElementNode {
  scrollIndex?: number;
  selected?: number;
  offset?: number;
  _targetPosition?: number;
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
  let screenOffset: number;

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

    screenOffset = componentRef.offset ?? screenOffset ?? (isRow ? lng.absX : lng.absY);
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || 'auto';

    // Allows the user to change the position of the component manually
    const targetPosition = componentRef._targetPosition ?? componentRef[axis];
    const rootPosition = Math.max(targetPosition, componentRef[axis]);
    componentRef.offset = componentRef.offset ?? rootPosition;
    const offset = componentRef.offset;
    selectedElement = selectedElement || componentRef.children[selected];
    const selectedPosition = selectedElement[axis] ?? 0;
    const selectedSize = selectedElement[dimension] ?? 0;
    const containerSize = componentRef[dimension] ?? 0;
    // In case the container is less than the screen size
    const maxOffset = Math.min(screenSize - containerSize - screenOffset - 2 * gap, 0);

    let nextElement;
    if (isIncrementing) {
      nextElement = selected + 1 < componentRef.children.length ? componentRef.children[selected + 1] : false;
    } else {
      nextElement = selected - 1 < componentRef.children.length ? componentRef.children[selected - 1] : false;
    }

    let nextPosition = rootPosition;

    if (scroll === 'always') {
      nextPosition = -selectedPosition + offset;
    } else if (!nextElement) {
      // Last element go to the end
      nextPosition = isIncrementing ? maxOffset : offset;
    } else if (scroll === 'auto') {
      if (
        isIncrementing &&
        componentRef.scrollIndex > 0 &&
        componentRef.selected >= componentRef.scrollIndex
      ) {
        nextPosition = rootPosition - selectedSize - gap;
      } else if (isIncrementing || !isRow) {
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

    // prevent container from moving beyond bounds
    if (isIncrementing && scroll !== 'always') {
      nextPosition = Math.max(nextPosition, maxOffset);
    } else {
      nextPosition = Math.min(nextPosition, offset);
    }

    if (componentRef[axis] !== nextPosition) {
      componentRef[axis] = nextPosition;
      // Store the new position as animations are occurring and if user scrolls
      // faster than animation we want to use the new position.
      componentRef._targetPosition = nextPosition;
    }
  };
}
