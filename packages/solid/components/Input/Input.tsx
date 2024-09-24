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

import { createSignal, type Component, createEffect, on, createMemo } from 'solid-js';
import { View, Text } from '@lightningtv/solid';
import styles from './Input.styles.js';
import type { InputProps } from './Input.types.js';

const getformatTitleText = (props, title) =>
  props.password ? (props.mask ?? '').repeat(title.length ?? 0) : title;

const Input: Component<InputProps> = props => {
  /* eslint-disable solid/reactivity */
  const [title, setTitle] = props.titleSignal;
  const [position, setPosition] = createSignal(props.position ?? title().length);
  const [keyEvent, setKeyEvent] = props.keyEvent;
  const formatTitleText = createMemo(() => getformatTitleText(props, title()));

  const formatInputText = (key: string) => {
    if (key === undefined || key === '') {
      return;
    }

    const inputText = title();
    let currentPosition = position();
    let newTitle = '';
    switch (key.toLowerCase()) {
      case 'backspace':
      case 'delete':
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition - 1) + inputText.slice(currentPosition)
            : inputText;
        currentPosition--;
        break;
      case 'done':
        break;
      case 'space':
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition) + ' ' + inputText.slice(currentPosition)
            : ' ' + inputText;
        currentPosition++;
        break;
      case 'clear':
        newTitle = '';
        currentPosition = 0;
        break;
      default:
        newTitle =
          currentPosition > 0
            ? inputText.slice(0, currentPosition) + key + inputText.slice(currentPosition)
            : key + inputText;
        currentPosition++;
        break;
    }

    setKeyEvent('');
    setTitle(newTitle);
    setPosition(currentPosition);
    return '';
  };

  createEffect(
    on(
      () => keyEvent(),
      keyEvent => {
        formatInputText(keyEvent);
      },
      { defer: true }
    )
  );

  function onRight() {
    setPosition(p => Math.max(p + 1, title().length));
    return true;
  }

  function onLeft() {
    setPosition(p => Math.max(p - 1, 0));
    return true;
  }

  return (
    <View
      {...props}
      // borderColor={props.strokeColor} // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
      // borderWidth={props.strokeWidth} // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
      color={props.backgroundColor}
      justifyContent={props.justify}
      borderRadius={props.radius}
      position={position()}
      onLeft={onLeft}
      onRight={onRight}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[props.style, styles.Container.tones[props.tone ?? styles.tone], styles.Container.base]}
    >
      <Text
        tone={props.tone ?? styles.tone}
        color={props.textColor}
        style={[
          props.textStyle,
          styles.Text.tones[props.tone ?? styles.tone], //
          styles.Text.base
        ]}
      >
        {formatTitleText() || ' '}
      </Text>
    </View>
  );
};

export default Input;
