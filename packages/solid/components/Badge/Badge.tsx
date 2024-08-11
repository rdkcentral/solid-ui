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
import { createMemo, type Component } from 'solid-js';
import { View, Text } from '@lightningtv/solid';
import styles from './Badge.styles.js';
import type { BadgeProps } from './Badge.types.js';

const BadgeContainer: Component<BadgeProps> = props => {
  return (
    <View
      {...props}
      // borderColor={props.strokeColor} // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
      // borderWidth={props.strokeWidth} // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
      color={props.backgroundColor}
      borderRadius={props.radius}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  const tone = createMemo(() => props.tone ?? styles.tone);

  return (
    <BadgeContainer {...props} height={props.height || styles.Text.base.lineHeight} tone={tone()} style={props.style}>
      <Text
        color={props.textColor}
        lineHeight={props.height || styles.Text.base.lineHeight}
        style={[
          styles.Text.tones[tone()], //
          styles.Text.base
        ]}
      >
        {props.title}
      </Text>
    </BadgeContainer>
  );
};

export { Badge as default, BadgeContainer };
