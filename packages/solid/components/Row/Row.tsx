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
import { View } from '@lightningtv/solid';
import { chainFunctions } from '../../utils/chainFunctions.js';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling } from '../../utils/withScrolling.js';
import styles from './Row.styles.js';
import type { RowProps } from './Row.types.js';

const Row: Component<RowProps> = (props: RowProps) => {
  const onLeft = handleNavigation('left');
  const onRight = handleNavigation('right');
  const scroll = createMemo(() => withScrolling(true, props.x || props.style?.x));

  return (
    <View
      {...props}
      selected={props.selected || 0}
      onLeft={chainFunctions(props.onLeft, onLeft)}
      onRight={chainFunctions(props.onRight, onRight)}
      forwardFocus={onGridFocus}
      onBeforeLayout={chainFunctions(props.onBeforeLayout, (elm, selected) => scroll()(elm, selected))}
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? scroll() : undefined
      )}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone ?? styles.tone],
        styles.Container.base
      ]}
    />
  );
};

export default Row;
