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
import type { LabelStyles, LabelConfig } from './Label.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Label: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: LabelConfig = {
  themeKeys: {
    color: 'backgroundColor',
    borderRadius: 'radius'
  },
  base: {
    display: 'flex',
    justifyContent: 'flexStart',
    color: theme.color.textNeutral,
    padding: [theme.spacer.md, theme.spacer.lg], // TODO themed padding values
    height: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
    borderRadius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    neutral: {
      backgroundColor: theme.color.fillNeutral
    }
  },
  tones: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.orange
      }
    }
  },
  themeStyles
};

const text: LabelConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    ...theme.typography.caption1,
    color: theme.color.textInverse,
    lineHeight: theme.typography.caption1.lineHeight + theme.spacer.md * 2,
    marginRight: theme.spacer.lg,
    marginLeft: theme.spacer.lg
  },
  tones: {
    inverse: {
      color: theme.color.textNeutral
    },
    brand: {
      color: theme.color.textNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<LabelStyles['Container']>(container);
const Text = makeComponentStyles<LabelStyles['Text']>(text);

const styles: LabelStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Text
};

export default styles;
