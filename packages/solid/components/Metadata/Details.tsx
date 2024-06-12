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

import type { Component, Accessor } from 'solid-js';
import { View, Text, Show, For } from '@lightningtv/solid';
import type { ElementNode } from '@lightningtv/solid';
import styles from './Details.styles.js';
import type { BadgeProps } from '../Badge/Badge.types.js';
import Badge from '../Badge/Badge.jsx';
import Rating from './Rating.jsx';
import type { RatingProps } from './Rating.types.js';
import type { DetailsProps } from './Details.types.js';

const Details: Component<DetailsProps> = (props: DetailsProps) => {
  return (
    <View
      {...props}
      gap={props.contentSpacing}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
      onBeforeLayout={(node: ElementNode, dimensions) => {
        if (dimensions?.height && node.parent) {
          node.parent.height = dimensions.height;
          return true; // return true to inform renderer we've updated a dimension
        }
        return false;
      }}
    >
      <Show when={props.title}>
        <Text
          style={[
            styles.Text.tones[props.tone ?? styles.tone], //
            styles.Text.base
          ]}
        >
          {props.title}
        </Text>
      </Show>
      <For each={props.badges}>
        {(badge: BadgeProps, idx: Accessor<number>) => (
          <Badge
            {...badge}
            marginRight={
              props.badges?.length && idx() === props.badges.length - 1
                ? 0
                : props.badgeContentSpacing ??
                  styles.Container.tones[props.tone ?? styles.tone]?.badgeContentSpacing ??
                  styles.Container.base.badgeContentSpacing
            }
          />
        )}
      </For>
      <For each={props.ratings}>
        {(rating: RatingProps, idx: Accessor<number>) => (
          <Rating
            {...rating}
            textColor={
              props.textColor ?? styles.Text.tones[props.tone ?? styles.tone]?.color ?? styles.Text.base.color
            }
            forwardStates
            marginRight={
              props.ratings?.length && idx() === props.ratings.length - 1
                ? 0
                : props.ratingContentSpacing ??
                  styles.Container.tones[props.tone ?? styles.tone]?.ratingContentSpacing ??
                  styles.Container.base.ratingContentSpacing
            }
          />
        )}
      </For>
    </View>
  );
};
export default Details;
