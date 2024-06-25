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

import { type Component } from 'solid-js';
import { View, Text } from '@lightningtv/solid';
import styles from './Button.styles.js';
import type { ButtonContainerProps, ButtonProps } from './Button.types.js';

const Button: Component<ButtonProps> = props => {
  return (
    <ButtonContainer {...props} forwardStates>
      <Text
        color={props.textColor}
        style={[
          styles.Text.tones[props.tone ?? styles.tone], //
          styles.Text.base
        ]}
      >
        {props.children}
      </Text>
    </ButtonContainer>
  );
};

const ButtonContainer: Component<ButtonContainerProps> = props => {
  return (
    <View
      {...props}
      color={props.backgroundColor}
      contentColor={props.contentColor}
      justifyContent={props.justify}
      itemSpacing={props.contentSpacing}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

export {
  Button as default, //
  ButtonContainer,
  type ButtonProps
};
