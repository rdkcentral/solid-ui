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
import theme from 'theme';

export function getWidthByUpCount(upCount: number | undefined = 1): number {
  const screenW = theme.layout.screenW;
  const columnCount = theme.layout.columnCount;
  const marginX = theme.layout.marginX;
  const gutterX = theme.layout.gutterX;

  if (upCount < 1 || upCount > columnCount) {
    console.error(
      `getWidthByUpCount expects an upCount between 1 & ${columnCount}, received ${upCount}. Defaulting to upCount 1.`
    );
    upCount = 1;
  }

  // the screen width, minus the margin x on each side
  const columnWidth = screenW - marginX * 2;
  // the total space of column gaps in between items
  const columnGapTotal = (upCount - 1) * gutterX;
  // the remaining amount of space left for all items
  const totalColumnsWidth = columnWidth - columnGapTotal;
  // the width of each item in that remaining width
  return totalColumnsWidth / upCount;
}
