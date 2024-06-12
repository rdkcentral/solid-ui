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
import { Text, Show, View, type TextProps } from '@lightningtv/solid';
import styles from './Rating.styles.js';
import Icon from '../Icon/Icon.jsx';
import type { RatingProps } from './Rating.types.js';

const formatTitle = (title: string | number): TextProps['children'] => {
  if ((typeof title !== 'string' && typeof title !== 'number') || !String(title).trim().length) {
    return;
  }

  let formatted = title;
  if (!Number.isNaN(title) && Number(title) >= 0 && Number(title) <= 100) {
    formatted += '%';
  }
  return formatted as string;
};

const Rating: Component<RatingProps> = (props: RatingProps) => {
  const formattedTitle = createMemo(() => formatTitle(props.title));
  return (
    <View
      {...props}
      justifyContent={props.justifyContent}
      gap={props.contentSpacing}
      alignItems={props.alignItems}
      forwardStates
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    >
      <Show when={props.iconSrc}>
        <Icon
          src={props.iconSrc}
          forwardStates
          style={[
            styles.Icon.tones[props.tone ?? styles.tone], //
            styles.Icon.base
          ]}
        />
      </Show>
      <Show when={formattedTitle()}>
        <Text
          textAlign={props.textAlign}
          color={props.textColor}
          marginRight={props.marginRight}
          style={[
            styles.Text.tones[props.tone ?? styles.tone], //
            styles.Text.base
          ]}
        >
          {formattedTitle()}
        </Text>
      </Show>
    </View>
  );
};

export default Rating;
