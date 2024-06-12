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
import type { RadioStyles, RadioConfig } from './Radio.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Radio: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: RadioConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'backgroundColor',
    colorChecked: 'backgroundColorChecked'
  },
  base: {
    color: theme.color.fillNeutralSecondary,
    height: theme.spacer.xxl + theme.stroke.sm * 2,
    width: theme.spacer.xxl + theme.stroke.sm * 2,
    borderRadius: theme.spacer.xxl / 2 + theme.stroke.sm,
    border: {
      color: theme.color.strokeNeutralSecondary,
      width: theme.stroke.sm
    }
  },
  tones: {
    inverse: {
      border: {
        color: theme.color.strokeInverseSecondary,
        width: theme.stroke.sm
      }
    },
    brand: {
      border: {
        color: theme.color.fillBrand,
        width: theme.stroke.sm
      }
    }
  },
  modeKeys: ['focus', 'disabled', 'checked'],
  themeStyles
};

const knob: RadioConfig = {
  themeKeys: {
    width: 'knobWidth',
    height: 'knobHeight',
    borderRadius: 'knobRadius',
    color: 'knobColor',
    colorChecked: 'knobColorChecked'
  },
  base: {
    color: theme.color.fillInverse,
    colorChecked: theme.color.fillInverse,
    width: theme.spacer.xxl,
    height: theme.spacer.xxl,
    borderRadius: theme.spacer.xxl / 2
  },
  tones: {
    inverse: {
      color: theme.color.fillNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<RadioStyles['Container']>(container);
const Knob = makeComponentStyles<RadioStyles['Knob']>(knob);

const styles: RadioStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Knob
};

export default styles;
