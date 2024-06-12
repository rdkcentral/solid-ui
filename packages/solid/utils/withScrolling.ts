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

import type { ElementNode, SolidNode } from '@lightningtv/solid';

// adds properties expected by withScrolling
export interface ScrollableElement extends ElementNode {
  scrollIndex?: number;
  selected?: number;
}

export function withScrolling(adjustment: number = 0) {
  return (
    componentRef: ScrollableElement,
    selectedElement: SolidNode,
    selected: number = 0,
    lastSelected: number | undefined
  ) => {
    if (componentRef.children.length === 0) {
      return;
    }

    const dimension = componentRef.flexDirection === 'row' ? 'width' : 'height';
    const axis = componentRef.flexDirection === 'row' ? 'x' : 'y';

    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || 'auto';
    const [lastItem, containerSize] = updateLastIndex(componentRef);

    // values based on row or column
    let rootPosition = componentRef[axis] ?? 0;
    // optional chain prevents app from breaking when scrollable element has no initially selected element
    const selectedPosition = selectedElement?.[axis] ?? 0;
    const selectedSize = selectedElement?.[dimension] ?? 0;

    // TODO, find better name
    const direct = lastSelected === undefined ? 'none' : selected > lastSelected ? 'positive' : 'negative';

    let next = rootPosition;

    // if we want to auto scroll ( scroll until the last component is sho on the screen)
    if (scroll === 'auto') {
      // if we have a scrollIndex and it is valid
      if (componentRef.scrollIndex != undefined && componentRef.scrollIndex >= 0) {
        // if we are at an index on or after the scrollIndex
        if (componentRef.selected >= componentRef.scrollIndex) {
          if (direct === 'positive') {
            next = rootPosition - selectedSize - gap;
          } else {
            next = rootPosition + selectedSize + gap;
          }
        }
        // no valid scroll index, complete auto scroll
        // this will be the case when we have no scroll (or an invalid one) and the lastItem is not shown (or selected is not shown)
        // if the (absolute value of current position  + the size of the visual portion of the row) is less than (the last Item position + the last Item size), then the last item is not shown
        // if scrolling backwards and the position of the selected item is less that the absolute value of the current position, the selected item is not shown
      } else if (
        Math.abs(rootPosition) + containerSize < lastItem.position + lastItem.size ||
        selectedPosition < Math.abs(rootPosition)
      ) {
        next = -selectedPosition + adjustment;
      }

      // if we want to scroll based to the -x value of the selected
      // this will be the case for always, and edge when we are scrolling negatively and the current positioning does not have the selected item shown
      // if direction is negative and absolute value of current position is higher than the position we want to be at, the selected Item is not shown
    } else if (
      scroll === 'always' ||
      (scroll === 'edge' && direct === 'negative' && Math.abs(rootPosition) > selectedPosition)
    ) {
      next = -selectedPosition + adjustment;

      // if we want to scroll based on the size of the selected item
      // this will be the case for edge when we are scrolling positively and the current positioning does not have the selected item shown
      // if direction is positive and (absolute value of current position + the size of the visual portion of the row) is less than (the position we want to be at + the size of the selected Item), the selected Item is not shown
    } else if (
      scroll === 'edge' &&
      direct === 'positive' &&
      Math.abs(rootPosition) + containerSize < selectedPosition + selectedSize
    ) {
      next = rootPosition - selectedSize - gap;
    }

    // if initial load, edge scroll type, and we have a selected index we want to go to on start
    else if (scroll === 'edge' && direct === 'none') {
      let currentChildIndex = 0;
      let currentChild, currentChildSize;
      while (
        currentChildIndex < componentRef.children.length &&
        Math.abs(rootPosition) + containerSize < selectedPosition + selectedSize
      ) {
        currentChild = componentRef.children[currentChildIndex++];
        currentChildSize = currentChild[dimension] ?? 0;
        rootPosition -= currentChildSize + gap;
      }
      next = rootPosition;
    }

    // updating value if scrolling is needed
    if (axis === 'x' && componentRef.x !== next) {
      componentRef.x = next;
    } else if (axis === 'y' && componentRef.y !== next) {
      componentRef.y = next;
    }
  };
}

function updateLastIndex(items: ElementNode): [{ position: number; size: number }, number] {
  let lastItem, containerSize;
  if (items.flexDirection === 'row') {
    lastItem = {
      position: items.children[items.children.length - 1].x ?? 0,
      size: items.children[items.children.length - 1].width ?? 0
    };
    containerSize = items.width ?? 0;
  } else {
    lastItem = {
      position: items.children[items.children.length - 1].y ?? 0,
      size: items.children[items.children.length - 1].height ?? 0
    };
    containerSize = items.height ?? 0;
  }

  return [lastItem, containerSize];
}
