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
import type { KeyStyles, KeyConfig } from '../Key/Key.types.js';
import type { KeyboardStyles, KeyboardConfig } from './Keyboard.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Keyboard: { defaultTone, ...themeStyles } = {} } = theme?.componentConfig;
/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Key: { ...keyThemeStyles } = {} } = theme?.componentConfig; // TODO default tone for sub-components

const container: KeyboardConfig = {
  themeKeys: {
    gap: 'keySpacing',
    width: 'screenW',
    marginX: 'marginX',
    keyHeight: 'keyHeight'
  },
  base: {
    gap: theme.spacer.md,
    width: theme.layout.screenW,
    display: 'flex',
    marginX: theme.layout.marginX,
    keyHeight: 100,
    flexBoundary: 'contain'
  },
  // @ts-expect-error TODO fix style types for component configs
  themeStyles
};

const key: KeyConfig = {
  themeKeys: {
    gap: 'keySpacing',
    borderRadius: 'borderRadius',
    color: 'backgroundColor',
    justifyContent: 'justify',
    baseWidth: 'baseWidth',
    sizes: 'sizes',
    contentColor: 'contentColor' // what is this used for
  },
  base: {
    gap: theme.spacer.md,
    height: theme.spacer.md * 9,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    contentColor: theme.color.fillNeutral,
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.sm
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse,
      focus: {
        color: theme.color.interactiveInverseFocus,
        contentColor: theme.color.fillNeutral
      }
    },
    brand: {
      focus: {
        contentColor: theme.color.fillNeutral
      }
    }
  },
  themeStyles: keyThemeStyles
};

const text: KeyboardConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.headline2
  },
  modes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    }
  },
  tones: {
    inverse: {
      focus: {
        color: theme.color.textNeutral
      }
    }
  },
  // @ts-expect-error TODO fix style types for component configs
  themeStyles
};

const Container = makeComponentStyles<KeyboardStyles['Container']>(container);
const Key = makeComponentStyles<KeyStyles['Container']>(key);
const Text = makeComponentStyles<KeyboardStyles['Text']>(text);

const styles: KeyboardStyles = {
  tone: defaultTone,
  Container,
  Key,
  Text
};

export default styles;
