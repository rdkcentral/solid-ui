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
import { combineStyles, View } from '@lightningtv/solid';
import styles from './Radio.styles.js';
import type { RadioProps } from './Radio.types.js';

const getKnobColor = (checked: boolean | undefined, props: RadioProps) => {
  return checked != undefined && props.checked
    ? (props.knobColorChecked ??
        styles.Knob.tones?.[props.tone ?? styles.tone]?.colorChecked ??
        styles.Knob.base.colorChecked)
    : (props.knobColor ?? styles.Knob.tones?.[props.tone ?? styles.tone]?.color ?? styles.Knob.base.color);
};

const getColor = (checked: boolean | undefined, props: RadioProps) => {
  return checked != undefined && props.checked
    ? (props.backgroundColorChecked ??
        styles.Container.tones?.[props.tone ?? styles.tone]?.colorChecked ??
        styles.Container.base.colorChecked)
    : (props.backgroundColor ??
        styles.Container.tones?.[props.tone ?? styles.tone]?.color ??
        styles.Container.base.color);
};

const Radio: Component<RadioProps> = props => {
  const knobColor = createMemo(() => getKnobColor(props.checked, props));
  const backgroundColor = createMemo(() => getColor(props.checked, props));

  return (
    <View
      {...props}
      color={backgroundColor()}
      style={combineStyles(
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      )}
      states={{ checked: props.checked }}
      children={
        props.checked
          ? (props.children ?? (
              <View
                color={knobColor()}
                mount={0.5}
                x={(styles.Container.base.width ?? 0) / 2}
                y={(styles.Container.base.height ?? 0) / 2}
                zIndex={2}
                width={props.knobWidth}
                height={props.knobHeight}
                borderRadius={props.knobRadius}
                style={combineStyles(styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base)}
              />
            ))
          : ''
      }
    />
  );
};

export default Radio;
