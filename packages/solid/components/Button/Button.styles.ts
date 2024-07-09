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
import type { ButtonStyles, ButtonConfig } from './Button.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Button: { defaultTone, ...buttonThemeStyles } = { buttonThemeStyles: {} } } = theme?.componentConfig;
/* @ts-expect-error next-line see above */
const { Surface: { surfaceDefaultTone, ...surfaceThemeStyles } = { surfaceThemeStyles: {} } } =
  theme?.componentConfig;

const themeStyles = {
  ...buttonThemeStyles,
  ...surfaceThemeStyles
};

const container: ButtonConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'backgroundColor',
    justifyContent: 'justify',
    itemSpacing: 'contentSpacing'
  },
  base: {
    height: theme.typography.button1.lineHeight + theme.spacer.xl * 2,
    display: 'flex',
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    justifyContent: 'center',
    alignItems: 'center',
    flexBoundary: 'fixed',
    borderRadius: theme.radius.sm,
    contentColor: theme.color.fillNeutral
  },
  modes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    }
  },
  tones: {
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      color: theme.color.interactiveBrand,
      focus: {
        color: theme.color.fillNeutral
      }
    }
  },
  themeStyles
};

const content: ButtonConfig = {
  themeKeys: {
    color: 'contentColor'
  },
  base: {
    color: theme.color.textNeutral
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
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles
};

const text: ButtonConfig = {
  themeKeys: {
    color: 'textColor',
    textAlign: 'textAlign',
    contain: 'contain'
  },
  base: {
    color: theme.color.textNeutral,
    ...theme.typography.button1,
    textAlign: 'center',
    contain: 'none'
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
      color: theme.color.fillNeutral
    },
    brand: {
      color: theme.color.fillBrand,
      focus: {
        color: theme.color.fillBrand
      }
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ButtonStyles['Container']>(container);
const Content = makeComponentStyles<ButtonStyles['Content']>(content);
const Text = makeComponentStyles<ButtonStyles['Text']>(text);

const styles: ButtonStyles = {
  tone: defaultTone || surfaceDefaultTone || 'neutral',
  Container,
  Content,
  Text
};

export default styles;
