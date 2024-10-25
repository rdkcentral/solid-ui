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
import { combineStyles, View } from '@lightningtv/solid';
import styles from './ProgressBar.styles.js';
import type { ProgressBarProps } from './ProgressBar.types.js';

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View
      {...props}
      borderRadius={props.radius}
      color={props.barColor}
      style={combineStyles(
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      )}
      forwardStates
    >
      <View
        borderRadius={props.radius}
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        color={props.progressColor}
        style={combineStyles(
          styles.ProgressBar.tones[props.tone ?? styles.tone], //
          styles.ProgressBar.base
        )}
      />
    </View>
  );
};

export default ProgressBar;
