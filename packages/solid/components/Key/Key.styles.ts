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
import type { TextStyles, NodeStyles } from '@lightningtv/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export type KeySizes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type KeySize = keyof KeySizes;

export interface KeyStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    padding: number[];
    sizes: KeySizes;
    baseWidth: number;
    keySpacing: number;
    contentColor: NodeStyles['color'];
  }>;
  Text: TextStyleSet;
}

export type KeyStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  keySpacing?: number;
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
  baseWidth?: NodeStyles['width'];
  sizes?: KeySizes;
};

export type KeyConfig = ComponentStyleConfig<KeyStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Key: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: KeyConfig = {
  themeKeys: {
    keySpacing: 'keySpacing',
    textAlign: 'textAlign',
    borderRadius: 'borderRadius',
    color: 'backgroundColor',
    justifyContent: 'justifyContent',
    baseWidth: 'baseWidth',
    sizes: 'sizes',
    contentColor: 'contentColor'
  },
  base: {
    keySpacing: theme.spacer.md,
    height: theme.spacer.md * 9,
    paddingX: theme.spacer.md,
    contentColor: theme.color.fillNeutral,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    padding: [theme.spacer.md],
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
  themeStyles
};
const text: KeyConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    textAlign: 'left',
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
  themeStyles
};

const Container = makeComponentStyles<KeyStyles['Container']>(container);
const Text = makeComponentStyles<KeyStyles['Text']>(text);

const styles: KeyStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Text
};

export default styles;
