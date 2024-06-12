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

/**
 * This method accepts an element style config and returns a fully formed style object,
 * which can be directly assigned to a solid element.
 *
 * the element style config is make up of the following properties:
 * - `themeKeys` - key/value pairs defining a solid style property,
 *    and the componentConfig property it should receive.
 * - `base` - the default styles of a component
 * - `toneModes` - any tone/mode/toneMode styles that a component has
 * - `themeStyles` - the componentConfig provided by the theme
 * - `toneModeFallbackMap`(optional) - an override to the defaultToneModeFallbackMap found below
 *
 * each method below has a comment explaining it, this is a rough overview of the steps this method goes through:
 *
 * 1. generate the base component styles, merging the style file values and themeStyle values(priority to the themeStyle values)
 * 2. generate the tones and modes included in the toneModes object, again with priority to the themeStyles
 * 3. generate styles for any tones and modes not included in the toneModes object using the fallback map
 * 4. return the object to the style file
 */

import objectFromEntries from './objectFromEntries';

// TODO types, sub components
// TODO these are configurable per component, move to theme?
const defaultModeKeys = ['focus', 'disabled'];
const defaultToneKeys = ['brand', 'inverse', 'neutral'];

export function makeComponentStyles(
  {
    themeKeys,
    base,
    modes = {},
    tones = {},
    themeStyles,
    modeKeys = defaultModeKeys,
    toneKeys = defaultToneKeys
  },
  debug = false
) {
  /**
   * creates the object of tone styles
   *
   * for each key in the tone object, pass its set of styles to mapModeConfigToSolidStyle for formatting
   */
  const makeToneStyles = (tones, themeComponentStyles, modeStyles) => {
    const toneStyles = toneKeys.map(tone => {
      const styles = {};

      // get list of style keys across both style file and theme component config
      // TODO a better way to do this
      const styleList = new Set(
        [].concat.apply([], [tones?.[tone] ?? {}, themeComponentStyles?.[tone] ?? {}].map(Object.keys))
      );

      // combine style file tones and theme component config tones, ignoring tone modes(added below)
      styleList.forEach(styleKey => {
        // if the style isn't a mode
        if (!modeKeys.includes(styleKey)) {
          styles[styleKey] = themeComponentStyles?.[tone]?.[styleKey] ?? tones?.[tone]?.[styleKey];
        }
      });

      /**
       *  merge tone modes with the following priority(lowest to highest):
       * - base.mode
       * - style file tone.mode
       * - theme component config tone.mode
       */
      modeKeys.forEach(mode => {
        styles[mode] = {
          ...modeStyles[mode], // fallbacks from base.mode
          ...tones?.[tone]?.[mode], // component configured tone.mode
          ...themeComponentStyles?.[tone]?.[mode] // theme configure tone.mode
        };
      });

      return [tone, styles];
    });
    return objectFromEntries(toneStyles);
  };

  /**
   * creates the object of mode(state-controlled) styles
   *
   * for each key in the mode object, pass its set of styles to mapModeConfigToSolidStyle for formatting
   */
  const makeModeStyles = (modes, themeComponentStyles) => {
    const modeStyles = modeKeys.map(mode => {
      return [mode, { ...modes?.[mode], ...themeComponentStyles?.[mode] }];
    });
    const modeObject = objectFromEntries(modeStyles);
    return modeObject;
  };

  /**
   * creates a base style object
   *
   * if a property has a themeable value(has a corresponding themeKey in the themeKeys object) check the
   * componentConfig for a base value. if one exists use it, otherwise use the value from the defaults object
   */
  const makeBaseStyles = (base, themeComponentStyles) => {
    const baseStyles = {
      ...base,
      ...themeComponentStyles.base
    };
    return baseStyles;
  };

  /**
   * uses the themeKey map to assign themed values to solid style properties
   * `themeKeys` is globally available
   */
  const mapThemeKeysToSolid = stylesToMap =>
    objectFromEntries(
      Object.entries(themeKeys)
        .filter(([_, themeKey]) => stylesToMap[themeKey])
        .map(([solidKey, themeKey]) => [solidKey, stylesToMap[themeKey]])
    );

  const convertComponentConfig = themeStyles => {
    const convertedThemeStyles = objectFromEntries(
      // iterate through each variant
      Object.entries(themeStyles).map(([variantName, styles]) => {
        // within each variant, assign the theme value to the correct solid style property for each theme key
        const convertedStyles = mapThemeKeysToSolid(styles);
        // repeat the above for each mode within a variant
        Object.entries(styles)
          .filter(([styleName, _]) => modeKeys.includes(styleName))
          .forEach(([modeName, modeStyles]) => {
            convertedStyles[modeName] = mapThemeKeysToSolid(modeStyles);
          });
        return [variantName, convertedStyles];
      })
    );
    return convertedThemeStyles;
  };

  const generateSolidStylesFromLookupObject = (base, modes, tones) => {
    const themeComponentStyles = convertComponentConfig(themeStyles);
    debug && console.log(themeComponentStyles);

    const baseStyles = makeBaseStyles(base, themeComponentStyles);
    debug && console.log(baseStyles);

    const modeStyles = makeModeStyles(modes, themeComponentStyles);
    debug && console.log(modeStyles);

    const toneStyles = makeToneStyles(tones, themeComponentStyles, modeStyles);
    debug && console.log(toneStyles);

    return {
      base: {
        ...baseStyles,
        ...modeStyles
      },
      tones: toneStyles
    };
  };
  return generateSolidStylesFromLookupObject(base, modes, tones, themeKeys);
}
