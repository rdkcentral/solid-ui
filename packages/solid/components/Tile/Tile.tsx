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

import { type Component, createSignal, createMemo } from 'solid-js';
import { Show, View } from '@lightningtv/solid';
import { withPadding } from '../../utils/index.js';
import Artwork from '../Artwork/Artwork.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import type { TileProps } from './Tile.types.js';
import styles from './Tile.styles.js';
withPadding;

const getTone = (props: TileProps) => props.tone ?? styles.tone;
const getPadding = (props: TileProps) =>
  props.padding ??
  styles.Container.tones[props.tone ?? styles.tone]?.padding ??
  styles.Container.base.padding;
const getWidth = (props: TileProps) =>
  props.width ?? styles.Container.tones[props.tone ?? styles.tone]?.width ?? styles.Container.base.width;
const getHeight = (props: TileProps) =>
  props.height ?? styles.Container.tones[props.tone ?? styles.tone]?.height ?? styles.Container.base.height;
const getPaddingYProgress = (props: TileProps) =>
  props.paddingYProgress ??
  styles.Container.tones[props.tone ?? styles.tone]?.paddingYProgress ??
  styles.Container.base.paddingYProgress;
const getPaddingYBetweenContent = (props: TileProps) =>
  props.paddingYBetweenContent ??
  styles.Container.tones[props.tone ?? styles.tone]?.paddingYBetweenContent ??
  styles.Container.base.paddingYBetweenContent;
const getContentSpacingY = (props: TileProps) =>
  props.contentSpacingY ??
  styles.Container.tones[props.tone ?? styles.tone]?.contentSpacingY ??
  styles.Container.base.contentSpacingY;

const Tile: Component<TileProps> = (props: TileProps) => {
  const [isFocused, setIsFocused] = createSignal(false);
  const tone = createMemo(() => getTone(props));
  const padding = createMemo(() => getPadding(props));
  const width = createMemo(() => getWidth(props));
  const height = createMemo(() => getHeight(props));
  const paddingYProgress = createMemo(() => getPaddingYProgress(props));
  const paddingYBetweenContent = createMemo(() => getPaddingYBetweenContent(props));
  const contentSpacingY = createMemo(() => getContentSpacingY(props));
  return (
    <node
      use:withPadding={padding()}
      {...props}
      borderRadius={props.radius}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[tone()],
        styles.Container.base
      ]}
    >
      <Artwork
        {...props.artwork}
        width={width()}
        borderRadius={props.radius}
        height={height()}
        states={props.states}
        style={props.style}
        tone={tone()}
      />

      <Show when={props.persistentMetadata || isFocused()}>
        <View x={padding()[0]} y={padding()[1]}>
          {props.topLeft}
        </View>

        <View x={width() - padding()[0]} y={padding()[1]} mountX={1}>
          {props.topRight}
        </View>

        <View
          style={[
            styles.InsetBottom.tones[tone()], //
            styles.InsetBottom.base
          ]}
          width={width() - padding()[0] * 2}
          x={padding()[0]}
          y={height() - paddingYBetweenContent() - (props.progressBar?.progress > 0 ? paddingYProgress() : 0)}
        >
          {props.inset}
        </View>

        <View
          style={[
            styles.StandardBottom.tones[tone()], //
            styles.StandardBottom.base
          ]}
          x={padding()[0]}
          y={height() + contentSpacingY()}
          width={width() - padding()[1] * 2}
        >
          {props.bottom}
        </View>
      </Show>
      <Show when={props.progressBar?.progress > 0}>
        {/* @ts-expect-error doesn't get rendered if progress is falsy */}
        <ProgressBar
          {...props.progressBar}
          width={width() - padding()[0] * 2}
          x={padding()[0]}
          y={height() - paddingYProgress() - Number(props?.progressBar?.height ?? 0)}
        />
      </Show>
    </node>
  );
};

export default Tile;
