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

import { renderer } from '@lightningtv/core';
import type { TextureMap } from '@lightningjs/renderer';

export interface SpriteDef {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function createSpriteMap(
  src: string,
  subTextures: SpriteDef[]
): Record<string, InstanceType<TextureMap['SubTexture']>> {
  const spriteMapTexture = renderer.createTexture('ImageTexture', {
    src
  });

  return subTextures.reduce<Record<string, InstanceType<TextureMap['SubTexture']>>>((acc, t) => {
    const { x, y, width, height } = t;
    acc[t.name] = renderer.createTexture('SubTexture', {
      texture: spriteMapTexture,
      x,
      y,
      width,
      height
    });
    return acc;
  }, {});
}
