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
import { getItemRatioDimensions } from './getItemRatioDimensions.js';
import { getWidthByUpCount } from './getWidthByUpCount.js';

type DimensionsConfig = { w?: number; h?: number; ratioX?: number; ratioY?: number; upCount?: number };

export function getDimensions(obj: DimensionsConfig = {}, fallback: DimensionsConfig = {}): DimensionsConfig {
  const { w, h, ratioX, ratioY, upCount } = obj;
  const fallbackW = fallback.w || 0;
  const fallbackH = fallback.h || 0;
  let dimensions = {};

  // hard set width and height values were passed in and should override other params
  if (w && h) {
    dimensions = {
      w,
      h: h
    };
  } else if (h && ratioX && ratioY) {
    // hard set height and ratio values were passed in, meaning the row has items with mixed ratios, so the width needs to be calculated
    dimensions = {
      w: Math.round((h * ratioX) / ratioY),
      h: h
    };
    // calculate dynamic width and height based off item ratios
  } else if (ratioX && ratioY && upCount) {
    dimensions = getItemRatioDimensions(ratioX, ratioY, upCount);
  } else if (h && upCount) {
    // calculate dynamic width based off a row upcount and a given height
    dimensions = {
      w: Math.round(getWidthByUpCount(upCount)),
      h: h
    };
  } else if (h) {
    dimensions = {
      w: fallbackW,
      h: h
    };
  } else if (w) {
    dimensions = {
      w: w,
      h: fallbackH
    };
  } else {
    // not enough information was provided to properly size the component
    dimensions = {
      w: fallbackW,
      h: fallbackH
    };
  }

  dimensions = {
    ...dimensions,
    ratioX,
    ratioY,
    upCount
  };

  return dimensions;
}
