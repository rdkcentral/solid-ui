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
import { getWidthByUpCount } from '../../utils/getWidthByUpCount.js';
import type { InputStyles, InputConfig } from './Input.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Input: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: InputConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'backgroundColor',
    justifyContent: 'justify'
  },
  base: {
    // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
    // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)
    width: getWidthByUpCount(4),
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    contentColor: theme.color.fillInverse,
    borderRadius: theme.radius.sm,
    marginX: theme.spacer.xxxl,
    actualTitle: ''
  },
  themeStyles
};

const text: InputConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    textAlign: 'left',
    color: theme.color.textNeutral,
    ...theme.typography.button1
  },
  themeStyles
};

const Container = makeComponentStyles<InputStyles['Container']>(container);
const Text = makeComponentStyles<InputStyles['Text']>(text);

const styles: InputStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Text
};

export default styles;
