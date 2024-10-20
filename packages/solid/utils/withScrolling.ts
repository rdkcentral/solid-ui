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

import type { ElementNode, ElementText } from '@lightningtv/core';

// adds properties expected by withScrolling
export interface ScrollableElement extends ElementNode {
  scrollIndex?: number;
  selected?: number;
  offset?: number;
  _targetPosition?: number;
}

/*
  Auto Scrolling starts scrolling right away until the last item is shown. Keeping a full view of the list.
  Edge starts scrolling when it reaches the edge of the viewport.
  Always scroll moves the list everytime
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
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || 'auto';

    const rootPosition = componentRef._targetPosition ?? componentRef[axis] ?? 0;
    componentRef.offset = componentRef.offset ?? rootPosition;
    const offset = componentRef.offset;
    selectedElement = selectedElement || componentRef.children[selected];
    const selectedPosition = selectedElement[axis] ?? 0;
    const selectedSize = selectedElement[dimension] ?? 0;
    // The -1 is due to wrap, so if we wrap we use incremental
    const movement =
      lastSelected === undefined
        ? 'incremental'
        : lastSelected - 1 === selected
          ? 'decremental'
          : 'incremental';
    let nextPosition = rootPosition;

    const [lastItem, containerSize] = updateLastIndex(isRow, componentRef);
    const isNotShown = (pos: number, size: number) =>
      Math.abs(rootPosition - offset) + containerSize < pos + size;

    if (scroll === 'auto') {
      if (componentRef.scrollIndex != undefined && componentRef.scrollIndex >= 0) {
        if (componentRef.selected >= componentRef.scrollIndex) {
          nextPosition =
            movement === 'incremental'
              ? rootPosition - selectedSize - gap
              : rootPosition + selectedSize + gap;
        } else if (movement === 'decremental' && componentRef.selected === componentRef.scrollIndex - 1) {
          nextPosition = rootPosition + selectedSize + gap;
        }
      } else if (movement === 'decremental') {
        if (rootPosition - offset < 0) {
          nextPosition = rootPosition + selectedSize + gap;
        }
      } else if (isNotShown(lastItem.position, lastItem.size) || selectedPosition < Math.abs(rootPosition)) {
        nextPosition = -selectedPosition + offset;
      }
    } else if (
      scroll === 'always' ||
      (scroll === 'edge' && movement === 'decremental' && Math.abs(rootPosition) > selectedPosition)
    ) {
      nextPosition = -selectedPosition + offset;
    } else if (
      scroll === 'edge' &&
      movement === 'incremental' &&
      isNotShown(selectedPosition, selectedSize)
    ) {
      nextPosition = rootPosition - selectedSize - gap;
    }

    if (componentRef[axis] !== nextPosition) {
      componentRef[axis] = nextPosition;
      // Store the new position as animations are occurring and if user scrolls faster than animation
      // we want to use the new position.
      componentRef._targetPosition = nextPosition;
    }
  };
}

function updateLastIndex(isRow: boolean, items: ElementNode): [{ position: number; size: number }, number] {
  let lastChild;
  for (let i = items.children.length - 1; i >= 0; i--) {
    if (!items.children[i].skipFocus) {
      lastChild = items.children[i];
      break;
    }
  }

  if (isRow) {
    return [
      {
        position: lastChild.x ?? 0,
        size: lastChild.width ?? 0
      },
      (items.preFlexwidth || items.width) ?? 0
    ];
  }
  return [
    {
      position: lastChild.y ?? 0,
      size: lastChild.height ?? 0
    },
    (items.preFlexheight || items.height) ?? 0
  ];
}
