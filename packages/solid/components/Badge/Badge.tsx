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
import { Text } from '@lightningtv/solid';
import { withPadding } from '../../utils/index.js';
import styles from './Badge.styles.js';
import type { BadgeProps } from './Badge.types.js';
withPadding; // Preserve the import.

const getTone = (props: BadgeProps) => props.tone ?? styles.tone;
const getTitle = (title: string | string[]) => title ?? '';
const getPadding = (props: BadgeProps, tone: string) =>
  props.padding ?? styles.Container?.tones[tone]?.padding ?? styles.Container.base.padding;

const BadgeContainer: Component<BadgeProps> = props => {
  const tone = createMemo(() => getTone(props));
  const padding = createMemo(() => getPadding(props, tone()));

  return (
    <node
      use:withPadding={padding()}
      {...props}
      // borderColor={props.strokeColor} // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
      // borderWidth={props.strokeWidth} // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
      color={props.backgroundColor}
      itemSpacing={props.contentSpacing}
      borderRadius={props.radius}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[tone()],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  const tone = createMemo(() => getTone(props));
  const title = createMemo(() => getTitle(props.title));

  return (
    <BadgeContainer {...props} padding={props.padding} tone={tone()} style={props.style}>
      <Text
        color={props.textColor}
        style={[
          styles.Text.tones[tone()], //
          styles.Text.base
        ]}
        tone={tone()}
      >
        {title()}
      </Text>
    </BadgeContainer>
  );
};

export { Badge as default, BadgeContainer };
