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

import theme from 'theme';
import { makeComponentStyles } from '../../utils/index.js';
import type { FocusRingStyles, FocusRingConfig } from './FocusRing.types.js';

// double check before committing if this error is still valid below
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { FocusRing: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: FocusRingConfig = {
  themeKeys: {
    borderRadius: 'radius'
  },
  base: {
    x: 0,
    y: 0,
    borderRadius: theme.radius.lg,
    border: {
      color: theme.color.interactiveNeutralFocus,
      width: theme.stroke.md
    }
  },
  themeStyles
};

const Container = makeComponentStyles<FocusRingStyles['Container']>(container);

const styles: FocusRingStyles = {
  tone: defaultTone || 'neutral',
  Container
};

export default styles;
