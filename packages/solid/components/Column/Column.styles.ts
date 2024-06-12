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
import theme from 'theme';
import { makeComponentStyles } from '../../utils/index.js';
import type { ColumnStyles, ColumnConfig } from './Column.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Column: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: ColumnConfig = {
  themeKeys: {
    gap: 'itemSpacing',
    scrollIndex: 'scrollIndex',
    transition: 'itemTransition'
  },
  base: {
    display: 'flex',
    flexBoundary: 'fixed',
    flexDirection: 'column',
    gap: theme.layout.gutterY,
    transition: {
      ...theme.animation.standardEntrance,
      duration: theme.animation.duration.fast
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ColumnStyles['Container']>(container);

const styles: ColumnStyles = {
  tone: defaultTone || 'neutral',
  Container
};

export default styles;
