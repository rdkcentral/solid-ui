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

import type { ElementNode } from '@lightningtv/core';

type withPaddingInput =
  | number
  | [number, number]
  | [number, number, number]
  | [number, number, number, number];

declare module 'solid-js/jsx-runtime' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      withPadding: withPaddingInput;
    }
  }
}

// To use with TS import withPadding and then put withPadding; on the next line to prevent tree shaking
export function withPadding(el: ElementNode, padding: () => withPaddingInput) {
  const pad = padding();
  let top: number, left: number, right: number, bottom: number;

  if (Array.isArray(pad)) {
    // top right bottom left
    if (pad.length === 2) {
      top = bottom = pad[0]!;
      left = right = pad[1]!;
    } else if (pad.length === 3) {
      top = pad[0]!;
      left = right = pad[1]!;
      bottom = pad[2]!;
    } else {
      [top, right, bottom, left] = pad;
    }
  } else {
    top = right = bottom = left = pad;
  }

  el.onBeforeLayout = () => {
    el.width =
      el.children.reduce((acc, c) => {
        return acc + (c.width || 0);
      }, 0) +
      left +
      right;
    const firstChild = el.children[0];
    if (firstChild) {
      // set padding or marginLeft for flex
      firstChild.x = left;
      firstChild.marginLeft = left;
    }

    let maxHeight = 0;
    el.children.forEach(c => {
      c.y = top;
      c.marginTop = top;
      maxHeight = Math.max(maxHeight, c.height || 0);
    });
    el.height = maxHeight + top + bottom;
    // let flex know we need to re-layout
    return true;
  };
}
