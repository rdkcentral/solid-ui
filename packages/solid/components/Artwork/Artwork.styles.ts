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
import type { ArtworkStyles, ArtworkConfig } from './Artwork.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Artwork: { defaultTone, ...themeStyles } = { themeStyles: {} } } = theme?.componentConfig;

const container: ArtworkConfig = {
  themeKeys: {
    borderRadius: 'radius',
    fallbackSrc: 'fallbackSrc',
    fillColor: 'fillColor',
    gradientColor: 'gradientColor',
    pivotX: 'imageScalePivotX',
    pivotY: 'imageScalePivotY',
    scale: 'imageScale'
  },
  base: {
    fallbackSrc: undefined,
    fillColor: theme.color.overlay,
    gradientColor: theme.color.material,
    pivotX: 0.5,
    pivotY: 0.5,
    scale: undefined,
    borderRadius: theme.radius.md
  },
  themeStyles
};

const Container = makeComponentStyles<ArtworkStyles['Container']>(container);

const styles: ArtworkStyles = {
  tone: defaultTone || 'neutral',
  Container
};

export default styles;
