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
import type { NavigableConfig, NavigableStyles } from '../../types/Navigable.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Row: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: NavigableConfig = {
  themeKeys: {
    gap: 'itemSpacing',
    scrollIndex: 'scrollIndex',
    transition: 'itemTransition'
  },
  base: {
    display: 'flex',
    flexBoundary: 'fixed',
    flexDirection: 'row',
    gap: theme.layout.gutterX,
    transition: {
      x: {
        ...theme.animation.standardEntrance,
        duration: theme.animation.duration.fast
      }
    }
  },
  themeStyles
};

const Container = makeComponentStyles<NavigableStyles['Container']>(container);

const styles: NavigableStyles = {
  tone: defaultTone,
  Container
};

export default styles;
