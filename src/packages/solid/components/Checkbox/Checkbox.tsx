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
import { View, Show, type IntrinsicNodeProps } from '@lightningjs/solid';
import Icon, { type IconProps } from '../Icon/Icon';
import styles from './Checkbox.styles';

export interface CheckboxProps extends IntrinsicNodeProps {
  /**
   * Indicates whether the checkbox is checked or unchecked.
   * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
   */
  checked?: boolean;
  /**
   * Object containing all properties supported in the [Icon component](?path=/docs/components-icon--icon)
   */
  icon?: Partial<IconProps> | undefined;
}

const Checkbox: Component<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <View {...props} forwardStates style={styles.Container}>
      <Show when={props.checked}>
        <View {...props} forwardStates style={styles.Container} color={styles.Background.color}>
          <Icon {...props.icon} x={props.width / 2} y={props.height / 2} mount={0.5} />
        </View>
      </Show>
    </View>
  );
};

export default Checkbox;