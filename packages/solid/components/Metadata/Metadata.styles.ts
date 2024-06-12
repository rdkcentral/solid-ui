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
import type { MetadataStyles, MetadataConfig } from './Metadata.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Metadata: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: MetadataConfig = {
  themeKeys: {
    justifyContent: 'justifyContent',
    alpha: 'alpha'
  },
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    flexBoundary: 'contain',
    alpha: theme.alpha.primary
  },
  modes: {
    disabled: {
      alpha: theme.alpha.inactive
    }
  },
  themeStyles
};

const titleText: MetadataConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    maxLines: 1,
    contain: 'width',
    ...theme.typography.headline3,
    color: theme.color.textNeutral
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverse,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutral,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles
};

const descriptionText: MetadataConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    contain: 'width',
    maxLines: 2,
    ...theme.typography.body3,
    color: theme.color.textNeutralSecondary
  },
  tones: {
    neutral: {
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    inverse: {
      color: theme.color.textInverseSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    },
    brand: {
      color: theme.color.textNeutralSecondary,
      disabled: {
        color: theme.color.textNeutralDisabled
      }
    }
  },
  themeStyles
};

const Container = makeComponentStyles<MetadataStyles['Container']>(container);
const DescriptionText = makeComponentStyles<MetadataStyles['DescriptionText']>(descriptionText);
const TitleText = makeComponentStyles<MetadataStyles['TitleText']>(titleText);

const styles: MetadataStyles = {
  tone: defaultTone || 'neutral',
  Container,
  TitleText,
  DescriptionText
};

export default styles;
