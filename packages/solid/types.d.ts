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

// license: https://github.com/sindresorhus/ts-extras/blob/main/license
// modified from https://github.com/sindresorhus/ts-extras/blob/main/source/object-keys.ts
export type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`;

// modified from https://github.com/sindresorhus/ts-extras/blob/main/source/object-entries.ts
export type ObjectEntries<T extends Record<PropertyKey, unknown>> = Array<[ObjectKeys<T>, T[ObjectKeys<T>]]>;

// TODO separate WithTonesModes into Config and StyleObject versions
export type StyleObject<T = object> = (NodeStyles | TextStyles) & ToneMode & T;

export type ThemeKeys<
  ComponentStyleList = object,
  BaseStyleType extends NodeStyles | TextStyles = NodeStyles
> = {
  // solid style name: themed style name
  [k in keyof BaseStyleType]?: keyof ComponentStyleList;
};

export interface ComponentStyleConfig<
  ComponentStyleList = Record<string, unknown>,
  BaseStyleType extends NodeStyles | TextStyles = NodeStyles
> {
  themeKeys: ThemeKeys<ComponentStyleList, BaseStyleType>;
  base: BaseStyleType;
  toneModes?: {
    // ex. focus
    [k in VariantList]?: {
      // ex. color: valid themed color value
      [k in ObjectKeys<
        ThemeKeys<ComponentStyleList, BaseStyleType>
      >]?: ComponentStyleList[keyof ComponentStyleList];
    };
  };
  // TODO type incoming theme styles
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  themeStyles: any;
  toneModeFallbackMap?: ToneModeFallbackMap;
}

export type ToneModeFallbackMap = {
  [key in VariantList]?: VariantList;
};

export type Tone = 'neutral' | 'inverse' | 'brand';
export type Mode = 'focus' | 'disabled';
export type ToneMode =
  | 'neutral-focus'
  | 'inverse-focus'
  | 'brand-focus'
  | 'neutral-disabled'
  | 'inverse-disabled'
  | 'brand-disabled';

export type VariantList = 'base' | Tone | Mode | ToneMode;

export type VariantPropertySet<T> = {
  [key in VariantList]?: {
    [K in keyof T]?: T[K];
  };
};
