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

import type { ElementNode, ElementText } from '@lightningtv/solid';

// adds properties expected by withScrolling
export interface ScrollableElement extends ElementNode {
  scrollIndex?: number;
  selected?: number;
}

export function withScrolling(adjustment: number = 0) {
  return (
    componentRef: ScrollableElement,
    selectedElement: ElementNode | ElementText,
    selected: number = 0,
    lastSelected?: number
  ) => {
    if (!componentRef.children.length) return;

    const isRow = componentRef.flexDirection === 'row';
    const dimension = isRow ? 'width' : 'height';
    const axis = isRow ? 'x' : 'y';
    const gap = componentRef.gap || 0;
    const scroll = componentRef.scroll || 'auto';
    const [lastItem, containerSize] = updateLastIndex(componentRef);

    let rootPosition = componentRef[axis] ?? 0;
    const selectedPosition = selectedElement?.[axis] ?? 0;
    const selectedSize = selectedElement?.[dimension] ?? 0;

    const movement =
      lastSelected === undefined ? 'none' : selected > lastSelected ? 'incremental' : 'decremental';
    let nextPosition = rootPosition;

    const isNotShown = (pos: number, size: number) => Math.abs(rootPosition) + containerSize < pos + size;

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
      } else if (isNotShown(lastItem.position, lastItem.size) || selectedPosition < Math.abs(rootPosition)) {
        nextPosition = -selectedPosition + adjustment;
      }
    } else if (
      scroll === 'always' ||
      (scroll === 'edge' && movement === 'decremental' && Math.abs(rootPosition) > selectedPosition)
    ) {
      nextPosition = -selectedPosition + adjustment;
    } else if (
      scroll === 'edge' &&
      movement === 'incremental' &&
      isNotShown(selectedPosition, selectedSize)
    ) {
      nextPosition = rootPosition - selectedSize - gap;
    } else if (scroll === 'edge' && movement === 'none') {
      let currentChildIndex = 0;
      while (currentChildIndex < componentRef.children.length && isNotShown(selectedPosition, selectedSize)) {
        const currentChild = componentRef.children[currentChildIndex++];
        const currentChildSize = currentChild[dimension] ?? 0;
        rootPosition -= currentChildSize + gap;
      }
      nextPosition = rootPosition;
    }

    if (componentRef[axis] !== nextPosition) {
      componentRef[axis] = nextPosition;
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
