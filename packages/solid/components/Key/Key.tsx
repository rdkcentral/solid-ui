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
import { ButtonContainer } from '../Button/Button.jsx';
import styles from './Key.styles.js';
import type { KeyProps } from './Key.types.js';

const getTone = (props: KeyProps) => props.tone ?? styles.tone;
const getMultiplier = (props: KeyProps) =>
  props.sizes?.[props.size ?? 'sm'] ??
  styles.Container?.tones?.[props.tone ?? styles.tone]?.sizes?.[props.size ?? 'sm'] ??
  styles.Container.base.sizes[props.size ?? 'sm'];

const getBaseWidth = (props: KeyProps) =>
  props.baseWidth ??
  styles.Container?.tones?.[props.tone ?? styles.tone]?.baseWidth ??
  styles.Container.base.baseWidth;

const getKeySpacing = (props: KeyProps) =>
  props.keySpacing ??
  styles.Container.tones?.[props.tone ?? styles.tone]?.keySpacing ??
  styles.Container.base.keySpacing;

const Key: Component<KeyProps> = props => {
  const tone = createMemo(() => getTone(props));
  const multiplier = createMemo(() => getMultiplier(props));
  const baseWidth = createMemo(() => getBaseWidth(props));
  const keySpacing = createMemo(() => getKeySpacing(props));

  return (
    <ButtonContainer
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones?.[tone()],
        styles.Container.base
      ]}
      forwardStates
      width={multiplier() * baseWidth() + keySpacing() * (multiplier() - 1)}
    >
      <Text
        contain={props.contain ?? 'width'}
        textAlign={props.textAlign}
        style={[
          styles.Text.tones[tone()], //
          styles.Text.base
        ]}
      >
        {props.title ? props.title : ''}
      </Text>
    </ButtonContainer>
    // if props onEnter, use that, else utilize toggle to see if update keyboard or add the key

    // props.setValue('props.jeyID')
    // onEnter={props.onEnter? props.onEnter : (props.toggle? toggleKeyboard: softKey, keyID/title) }
  );
};

export default Key;
