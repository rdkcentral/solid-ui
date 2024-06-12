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
import type { Effects, NodeProps, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ArtworkProps extends UIComponentProps, ArtworkStyleProperties {
  /** dynamic shader effects applied to the root node */
  effects?: Effects;

  /** enable gradient overlay, gradient color can be set with `gradientColor` */
  gradient?: boolean;

  /**
   * URI of image to be displayed
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L255 INodeWritableProps.src}
   * */
  src?: NodeProps['src'];

  /**
   * optional callback that can be used to generate custom strings to request an image. The callback will be passed an object containing the following parameters: aspectRatio, src, w, h. Be default aspect ratio will match the closest value from srcCallbackAspectRatios
   */
  srcCallback?: (obj: {
    closestAspectRatio: string | undefined;
    aspectRatio: string | undefined;
    src: string;
    width: number;
    height: number;
  }) => string;
}

export interface ArtworkStyleProperties {
  /** URI of fallback image to be shown if the src request fails */
  fallbackSrc?: NodeStyles['src'];

  /**
   * solid color background, displayed if no src is provided or URI is invalid
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  fillColor?: NodeStyles['color'];

  /**
   * starting color the linear gradient effect to apply on top of image
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/core/renderers/webgl/shaders/effects/LinearGradientEffect.ts#L35 LinearGradientEffectProps.colors}
   * */
  gradientColor?: NodeStyles['linearGradient'];

  /**
   * The scale value multiplies the provided width and height of the Node.
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L260 INodeWritableProps.scale}
   *
   */
  imageScale?: NodeStyles['scale'];

  /**
   * X position of the Node's Pivot Point
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L375 INodeWritableProps.pivotX}
   */
  imageScalePivotX?: NodeStyles['pivotX'];

  /**
   * Y position of the Node's Pivot Point
   *
   * core reference:
   * {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L390 INodeWritableProps.pivotY}
   */
  imageScalePivotY?: NodeStyles['pivotY'];
  radius?: NodeStyles['borderRadius'];

  // TODO future adds
  // blur: number; not in renderer yet
  // padding: number; is this just support for CSS padding?
}

export interface ArtworkStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    fallbackSrc: NodeStyles['src'];
    fillColor: NodeStyles['color'];
    gradientColor: NodeStyles['color'];
  }>;
}

export type ArtworkConfig = ComponentStyleConfig<ArtworkStyleProperties>;
