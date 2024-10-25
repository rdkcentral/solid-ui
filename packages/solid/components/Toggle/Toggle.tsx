/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import styles from './Toggle.styles.js';
import type { ToggleProps } from './Toggle.types.js';

const positionToggle = (checked: boolean | undefined, props: ToggleProps) => {
  return checked != undefined && props.checked
    ? // width
      (styles.Container.tones?.[props.tone ?? styles.tone]?.width ?? styles.Container.base.width) -
        // strokeWidth
        (styles.Container.tones?.[props.tone ?? styles.tone]?.border?.width ??
          styles.Container.base.border.width) -
        // knobPadding
        (styles.Knob.tones?.[props.tone ?? styles.tone]?.padding ?? styles.Knob.base.padding) -
        // knobWidth
        (styles.Knob.tones?.[props.tone ?? styles.tone]?.width ?? styles.Knob.base.width) || 0
    : // strokeWidth

      (styles.Container.tones?.[props.tone ?? styles.tone]?.border?.width ??
        styles.Container.base.border.width) +
        // knobPadding
        (styles.Knob.tones?.[props.tone ?? styles.tone]?.padding ?? styles.Knob.base.padding) || 0;
};

const getKnobColor = (checked: boolean | undefined, props: ToggleProps) => {
  return checked != undefined && props.checked
    ? (props.knobColorChecked ??
        styles.Knob.tones?.[props.tone ?? styles.tone]?.colorChecked ??
        styles.Knob.base.colorChecked)
    : (props.knobColor ?? styles.Knob.tones?.[props.tone ?? styles.tone]?.color ?? styles.Knob.base.color);
};

const getBackgroundColor = (checked: boolean | undefined, props: ToggleProps) => {
  return checked != undefined && props.checked
    ? (props.backgroundColorChecked ??
        styles.Container.tones?.[props.tone ?? styles.tone]?.colorChecked ??
        styles.Container.base.colorChecked)
    : (props.backgroundColor ??
        styles.Container.tones?.[props.tone ?? styles.tone]?.color ??
        styles.Container.base.color);
};

const Toggle: Component<ToggleProps> = (props: ToggleProps) => {
  const toggleX = createMemo(() => positionToggle(props.checked, props));
  const knobColor = createMemo(() => getKnobColor(props.checked, props));
  const backgroundColor = createMemo(() => getBackgroundColor(props.checked, props));

  return (
    <View
      {...props}
      color={backgroundColor()}
      borderRadius={props.strokeRadius}
      style={combineStyles(
        props.style, //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      )}
    >
      <View
        style={combineStyles(styles.Knob.tones?.[props.tone ?? styles.tone], styles.Knob.base)}
        color={knobColor()}
        y={
          ((styles.Container.tones[props.tone ?? styles.tone]?.height ?? styles.Container.base.height ?? 0) -
            (styles.Knob.tones[props.tone ?? styles.tone]?.height ?? styles.Knob.base.height ?? 0)) /
          2
        }
        x={toggleX()}
        zIndex={2}
        width={props.knobWidth}
        height={props.knobHeight}
        borderRadius={props.knobRadius}
      />
    </View>
  );
};

export default Toggle;
