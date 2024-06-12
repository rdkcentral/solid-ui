/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
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

import { beforeEach, describe, expect, it } from 'vitest';
import { makeComponentStyles } from './getThemeStyles.js';

describe('makeComponentStyles', () => {
  let styleConfig, expectedStyles;
  beforeEach(() => {
    styleConfig = {
      themeKeys: {
        number: 'themeNumber',
        stringProp: 'stringTheme'
      },
      base: {
        number: 200,
        stringProp: 'base'
      },
      modes: {
        focus: {
          stringProp: 'focus'
        },
        disabled: {
          stringProp: 'disabled'
        }
      },
      tones: {
        inverse: {
          stringProp: 'inverse'
        },
        brand: {
          stringProp: 'brand',
          focus: {
            stringProp: 'brandFocus'
          }
        }
      },
      themeStyles: {
        brand: {
          themeNumber: 4
        },
        inverse: {
          focus: {
            stringTheme: 'themed-override',
            themeNumber: 'theme-number-override'
          }
        }
      }
    };

    expectedStyles = {
      base: {
        number: 200,
        stringProp: 'base',
        focus: {
          stringProp: 'focus'
        },
        disabled: {
          stringProp: 'disabled'
        }
      },
      tones: {
        brand: {
          number: 4,
          stringProp: 'brand',
          focus: {
            stringProp: 'brandFocus'
          },
          disabled: {
            stringProp: 'disabled'
          }
        },
        inverse: {
          stringProp: 'inverse',
          focus: {
            number: 'theme-number-override',
            stringProp: 'themed-override'
          },
          disabled: {
            stringProp: 'disabled'
          }
        },
        neutral: {
          focus: {
            stringProp: 'focus'
          },
          disabled: {
            stringProp: 'disabled'
          }
        }
      }
    };
  });
  it('converts a style config to a style object', async () => {
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
  it('overrides style config values with theme style values using themeKeys', () => {
    styleConfig.themeStyles.brand = {
      stringTheme: 'themed-override',
      themeNumber: 'theme-number-override'
    };
    expectedStyles.tones.brand = {
      ...expectedStyles.tones.brand,
      stringProp: 'themed-override',
      number: 'theme-number-override'
    };
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
  it("uses theme style values even if the toneMode doesn't exist in the config", () => {
    styleConfig.themeStyles.inverse.focus = {
      stringTheme: 'themed-override',
      themeNumber: 'theme-number-override'
    };
    expectedStyles.tones.inverse.focus = {
      number: 'theme-number-override',
      stringProp: 'themed-override'
    };
    const styles = makeComponentStyles(styleConfig);
    expect(styles).toStrictEqual(expectedStyles);
  });
});
