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
import { Text, type NodeProps } from '@lightningtv/solid';
import type { UIComponentProps } from '../../types/interfaces.js';
import { ButtonContainer } from '../Button/Button.jsx';
import styles, { type KeySize } from './Key.styles.js';

export interface KeyProps extends UIComponentProps {
  /**
   * text content of the key
   */
  title?: string;

  /**
   * url for icon
   */
  icon?: NodeProps['src']; // TODO this isn't used
  /**
   * width of the Key
   */
  size?: KeySize;
  /**
   * path to image or inline SVG XML
   */
  src?: NodeProps['src'];
  /**
   * The horizontal spacing between each key in a Keyboard. This value is factored into the width of the key so that it aligns with with the borders of other keys in a Keyboard.
   */
  keySpacing?: number;
  /**
   * If true, pressing the key will trigger the $toggleKeyboard event. If false, the key will trigger the $onSoftKey event.
   */
  toggle?: boolean;
}

const Key: Component<KeyProps> = props => {
  return (
    <ButtonContainer
      {...props}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
      width={
        (styles.Container?.tones?.[props.tone ?? styles.tone]?.sizes?.[props.size || 'sm'] ??
          styles.Container.base.sizes[props.size || 'sm']) *
          (styles.Container?.tones?.[props.tone ?? styles.tone]?.baseWidth ??
            styles.Container.base.baseWidth) +
        (styles.Container.tones?.[props.tone ?? styles.tone]?.keySpacing ??
          styles.Container.base.keySpacing) *
          (styles.Container.tones?.[props.tone ?? styles.tone]?.sizes?.[props.size || 'sm'] ??
            styles.Container.base.sizes[props.size || 'sm'] - 1)
      }
      // Keep below for more thought
      //
      // width={
      //   (props?.style?.Container?.sizes[props.size || 'sm'] ?? styles.Container.sizes[props.size || 'sm']) *
      //     (props?.style?.Container?.baseWidth ?? styles.Container.baseWidth) +
      //   (props?.style?.Container?.keySpacing ?? styles.Container.keySpacing) *
      //     ((props?.style?.Container?.sizes[props.size || 'sm'] ??
      //       styles.Container.sizes[props.size || 'sm']) -
      //       1)
      // }
    >
      <Text
        style={[
          styles.Text.tones[props.tone ?? styles.tone], //
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
