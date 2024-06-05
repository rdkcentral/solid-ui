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

import { type Component, createMemo } from 'solid-js';
import { View } from '@lightningtv/solid';
import { withPadding } from '@lightningtv/solid/primitives';
import type { Tone } from 'types/types.js';
import staticStyles from './Artwork.static-styles.json';
import styles from './Artwork.styles.js';
import type { ArtworkProps } from './Artwork.types.js';
withPadding;

const getTone = (props: ArtworkProps) => props.tone ?? styles.tone;

const formatSrc = (props: ArtworkProps, tone: Tone) => {
  let src = //
    props.src ??
    props.fallbackSrc ??
    styles.Container.tones[tone]?.fallbackSrc ??
    styles.Container.base.fallbackSrc;

  if (src && props.srcCallback && typeof props.srcCallback === 'function') {
    src = props.srcCallback({
      closestAspectRatio: undefined,
      aspectRatio: undefined,
      src: src,
      width: Number(props.width),
      height: Number(props.height)
    });
  }
  return src;
};

const getColor = (props: ArtworkProps, formattedArtwork: string) =>
  Boolean(formattedArtwork)
    ? undefined
    : // using fillColor here because props.color will alter the image
      props.fillColor ??
      styles.Container.tones[props.tone ?? styles.tone]?.fillColor ??
      styles.Container.base.fillColor;

const getLinearGradient = (props: ArtworkProps, tone: Tone) => {
  if (!props.gradient) {
    return undefined;
  }
  const gradientColor =
    props.gradientColor ?? styles.Container.tones[tone]?.gradientColor ?? styles.Container.base.gradientColor;

  return {
    colors: [0xff000000, Number(gradientColor)]
  };
};

const Artwork: Component<ArtworkProps> = props => {
  const tone = createMemo(() => getTone(props));
  const src = createMemo(() => formatSrc(props, tone()));
  const color = createMemo(() => getColor(props, src()));
  const linearGradient = createMemo(() => getLinearGradient(props, tone()));

  return (
    <View
      {...props}
      color={color()}
      linearGradient={linearGradient()}
      pivotX={props.imageScalePivotX}
      pivotY={props.imageScalePivotX}
      scale={props.imageScale}
      src={src()}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Artwork;
