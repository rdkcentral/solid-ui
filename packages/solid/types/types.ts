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

export type ThemeKeys<BaseStyleType, ComponentStyleList = object> = {
  // solid style name: themed style name
  [k in keyof BaseStyleType as keyof BaseStyleType | keyof ComponentStyleList]?: keyof ComponentStyleList;
};

export interface ComponentStyleConfig<
  ComponentStyleList = object,
  ModeSet extends string = Mode,
  ToneSet extends string = Tone,
  BaseStyleType extends NodeStyles | TextStyles = NodeStyles | TextStyles
> {
  themeKeys: ThemeKeys<BaseStyleType, ComponentStyleList>;
  base: BaseStyleType;
  tones?: {
    [k in ToneSet]?:
      | (ComponentStyleList & BaseStyleType)
      | {
          [k in ModeSet]?: ComponentStyleList & BaseStyleType;
        };
  };
  modes?: {
    [k in ModeSet]?: ComponentStyleList & BaseStyleType;
  };
  modeKeys?: string[];
  toneKeys?: string[];
  // TODO type incoming theme styles
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  themeStyles: {
    [k in VariantList]?: ComponentStyleList;
  };
}

export type Tone = 'neutral' | 'inverse' | 'brand';
export type Mode = 'focus' | 'disabled';

export type VariantList = 'base' | 'neutral' | 'inverse' | 'brand' | 'focus' | 'disabled';

export type VariantPropertySet<T> = {
  [key in VariantList]?: {
    [K in keyof T]?: T[K];
  };
};

export interface WithTonesModes<StyleSet> {
  /**
   * base styles are `neutral`
   */
  // TODO `base` is required in theme, but not valid to be passed to component
  // base: StyleSet;
  // focus?: Partial<StyleSet>;
  // disabled?: Partial<StyleSet>;
  neutral?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
  inverse?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
  brand?: Partial<StyleSet> & {
    focus?: Partial<StyleSet>;
    disabled?: Partial<StyleSet>;
  };
}

export interface WithModes<StyleSet> {
  focus?: Partial<StyleSet>;
  disabled?: Partial<StyleSet>;
}

export type FlexibleNodeStyles<AdditionalTypes = unknown> = NodeStyles & AdditionalTypes;
export type FlexibleTextStyles<AdditionalTypes = unknown> = TextStyles & AdditionalTypes;

// could be a nested object
export type NodeStyleSet<AdditionalTypes = unknown> = {
  base: Required<FlexibleNodeStyles & AdditionalTypes> & WithModes<FlexibleNodeStyles & AdditionalTypes>;
  tones: WithTonesModes<FlexibleNodeStyles & AdditionalTypes>; // includes modes of tones
};

// could be a nested object
export type TextStyleSet<AdditionalTypes = unknown> = {
  base: Required<FlexibleTextStyles & AdditionalTypes> & WithModes<FlexibleTextStyles & AdditionalTypes>;
  tones: WithTonesModes<FlexibleTextStyles & AdditionalTypes>;
};
