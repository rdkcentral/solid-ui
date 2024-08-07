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

import { type Component } from 'solid-js';
import { View, type KeyHandler } from '@lightningtv/solid';
import { handleNavigation, onGridFocus } from '../../utils/handleNavigation.js';
import { withScrolling } from '../../utils/withScrolling.js';
import { chainFunctions } from '../../utils/chainFunctions.js';
import styles from './Column.styles.js';
import type { ColumnProps } from './Column.types.js';

const Column: Component<ColumnProps> = (props: ColumnProps) => {
  const onUp = handleNavigation('up');
  const onDown = handleNavigation('down');
  const scroll = withScrolling(false);

  return (
    <View
      {...props}
      onUp={chainFunctions<KeyHandler | undefined>(props.onUp, onUp)}
      onDown={chainFunctions<KeyHandler | undefined>(props.onDown, onDown)}
      selected={props.selected || 0}
      forwardFocus={onGridFocus}
      onBeforeLayout={
        props.selected
          ? chainFunctions(props.onBeforeLayout, (elm, selected) => scroll(elm, selected))
          : props.onBeforeLayout
      }
      onSelectedChanged={chainFunctions(
        props.onSelectedChanged,
        props.scroll !== 'none' ? scroll : undefined
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

export default Column;
