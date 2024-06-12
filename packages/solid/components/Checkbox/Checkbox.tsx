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

import type { Component } from 'solid-js';
import { View } from '@lightningtv/solid';
import styles from './Checkbox.styles.js';
import Icon from '../Icon/Icon.jsx';
import type { CheckboxProps } from './Checkbox.types.js';

const check = '/assets/images/check-icon.png';

const Checkbox: Component<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <View
      {...props}
      borderRadius={props.radius}
      states={{ checked: props.checked }}
      color={props.backgroundColor}
      children={
        props.checked
          ? props.children || (
              <Icon
                src={check}
                // color={props.strokeColor} TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
                width={props.checkWidth}
                height={props.checkHeight}
                style={[
                  styles.Icon.tones[props.tone || styles.tone], //
                  styles.Icon.base
                ]}
              />
            )
          : ''
      }
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

export default Checkbox;
