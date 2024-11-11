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

declare const _default: {
  readonly name: 'Base Solid TV';
  readonly alpha: {
    readonly primary: 1;
    readonly secondary: 0.7;
    readonly tertiary: 0.1;
    readonly inactive: 0.5;
    readonly full: 1;
    readonly none: 0;
    readonly alpha1: 0.1;
    readonly alpha2: 0.3;
    readonly alpha3: 0.5;
    readonly alpha4: 0.7;
    readonly alpha5: 0.9;
    readonly alpha6: 0.95;
  };
  readonly animation: {
    readonly duration: {
      readonly none: 0;
      readonly xfast: 100;
      readonly fast: 250;
      readonly normal: 500;
      readonly slow: 750;
      readonly xslow: 900;
    };
    readonly delay: {
      readonly none: 0;
      readonly xfast: 10;
      readonly fast: 25;
      readonly normal: 50;
      readonly slow: 75;
      readonly xslow: 90;
    };
    readonly expressive: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly expressiveEntrance: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly expressiveExit: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly standard: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly standardEntrance: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly standardExit: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly utility: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly utilityEntrance: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
    readonly utilityExit: {
      readonly delay: 0;
      readonly duration: 0.25;
      readonly easing: 'cubic-bezier(0, 0, 1, 1)';
    };
  };
  readonly asset: {
    readonly arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==';
    readonly arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=';
    readonly backspaceOutline: 'data:image/png;base64,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';
    readonly check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg==';
  };
  readonly color: {
    readonly palette: {};
    readonly white: '0xffffffff';
    readonly black: '0x000000ff';
    readonly grey: '0x929096ff';
    readonly red: '0xe74c3cff';
    readonly orange: '0xdc7633ff';
    readonly yellow: '0xf7dc6fff';
    readonly green: '0x2ecc71ff';
    readonly blue: '0x93a9fdff';
    readonly purple: '0x663399ff';
    readonly overlay: '0x181819b3';
    readonly material: '0x181819ff';
    readonly materialNeutral: '0x181819ff';
    readonly materialNeutralElevated: '0x373639ff';
    readonly materialInverse: '0xf8f7faff';
    readonly materialInverseElevated: '0xffffffff';
    readonly materialBrand: '0x000033ff';
    readonly materialBrandElevated: '0x242a65ff';
    readonly textNeutral: '0xf8f7faff';
    readonly textNeutralSecondary: '0xf8f7fab3';
    readonly textNeutralTertiary: '0xf8f7fa1a';
    readonly textNeutralDisabled: '0xf8f7fa80';
    readonly textInverse: '0x181819ff';
    readonly textInverseSecondary: '0x181819b3';
    readonly textInverseTertiary: '0x1818191a';
    readonly textInverseDisabled: '0x18181980';
    readonly textBrand: '0x93a9fdff';
    readonly textBrandSecondary: '0x93a9fdb3';
    readonly textBrandTertiary: '0x93a9fd1a';
    readonly textBrandDisabled: '0x93a9fd80';
    readonly textOnBrand: '0x181819ff';
    readonly textOnBrandSecondary: '0x181819b3';
    readonly textOnBrandTertiary: '0x1818191a';
    readonly textOnBrandDisabled: '0x18181980';
    readonly textPositive: '0x2ecc71ff';
    readonly textNegative: '0xe74c3cff';
    readonly textInfo: '0x93a9fdff';
    readonly textCaution: '0xdc7633ff';
    readonly fillTransparent: '0xffffff0';
    readonly fillNeutral: '0xf8f7faff';
    readonly fillNeutralSecondary: '0xf8f7fab3';
    readonly fillNeutralTertiary: '0xf8f7fa1a';
    readonly fillNeutralDisabled: '0xf8f7fa80';
    readonly fillInverse: '0x181819ff';
    readonly fillInverseSecondary: '0x181819b3';
    readonly fillInverseTertiary: '0x1818191a';
    readonly fillInverseDisabled: '0x18181980';
    readonly fillBrand: '0x93a9fdff';
    readonly fillBrandSecondary: '0x93a9fdb3';
    readonly fillBrandTertiary: '0x93a9fd1a';
    readonly fillBrandDisabled: '0x93a9fd80';
    readonly fillPositive: '0x2ecc71ff';
    readonly fillNegative: '0xe74c3cff';
    readonly fillInfo: '0x93a9fdff';
    readonly fillCaution: '0xdc7633ff';
    readonly strokeNeutral: '0xf8f7faff';
    readonly strokeNeutralSecondary: '0xf8f7fab3';
    readonly strokeNeutralTertiary: '0xf8f7fa1a';
    readonly strokeNeutralDisabled: '0xf8f7fa80';
    readonly strokeInverse: '0x181819ff';
    readonly strokeInverseSecondary: '0x181819b3';
    readonly strokeInverseTertiary: '0x1818191a';
    readonly strokeInverseDisabled: '0x18181980';
    readonly strokeBrand: '0x93a9fdff';
    readonly strokeBrandSecondary: '0x93a9fdb3';
    readonly strokeBrandTertiary: '0x93a9fd1a';
    readonly strokeBrandDisabled: '0x93a9fd80';
    readonly strokeOnBrand: '0x181819ff';
    readonly strokeOnBrandSecondary: '0x181819b3';
    readonly strokeOnBrandTertiary: '0x1818191a';
    readonly strokeOnBrandDisabled: '0x18181980';
    readonly strokePositive: '0x2ecc71ff';
    readonly strokeNegative: '0xe74c3cff';
    readonly strokeInfo: '0x93a9fdff';
    readonly strokeCaution: '0xdc7633ff';
    readonly interactiveNeutral: '0xffffff1a';
    readonly interactiveNeutralFocus: '0xffffffff';
    readonly interactiveNeutralFocusSoft: '0xffffff1a';
    readonly interactiveInverse: '0x48474b1a';
    readonly interactiveInverseFocus: '0x48474bff';
    readonly interactiveInverseFocusSoft: '0x48474b1a';
    readonly interactiveBrand: '0xbecffe1a';
    readonly interactiveBrandFocus: '0xbecffeff';
    readonly interactiveBrandFocusSoft: '0xbecffe1a';
    readonly shadowDefault: '0x000000b3';
    readonly shadowFocused: '0x0000001a';
    readonly shadowElevated: '0x000000b3';
    readonly shadowText: '0x000000b3';
    readonly shadowNeutral: '0x000000b3';
    readonly shadowNeutralFocus: '0x000000b3';
    readonly shadowNeutralElevated: '0x000000b3';
    readonly shadowNeutralText: '0x0000000';
    readonly shadowInverse: '0x000000b3';
    readonly shadowInverseFocus: '0x000000b3';
    readonly shadowInverseElevated: '0x000000b3';
    readonly shadowInverseText: '0x0000000';
    readonly shadowBrand: '0x000000b3';
    readonly shadowBrandFocus: '0x000000b3';
    readonly shadowBrandElevated: '0x000000b3';
    readonly shadowBrandText: '0x0000000';
  };
  readonly font: readonly [];
  readonly layout: {
    readonly columnCount: 10;
    readonly focusScale: 1.2;
    readonly gutterX: 20;
    readonly gutterY: 20;
    readonly marginX: 150;
    readonly marginY: 150;
    readonly safe: 50;
    readonly screenW: 1920;
    readonly screenH: 1080;
  };
  readonly radius: {
    readonly none: 0;
    readonly xs: 2;
    readonly sm: 4;
    readonly md: 8;
    readonly lg: 16;
    readonly xl: 24;
  };
  readonly shadow: {
    readonly default: {
      readonly x: 4;
      readonly y: 4;
      readonly blur: 4;
      readonly spread: 4;
      readonly color: '0x000000b3';
    };
    readonly focused: {
      readonly x: 6;
      readonly y: 6;
      readonly blur: 12;
      readonly spread: 8;
      readonly color: '0x0000001a';
    };
    readonly elevated: {
      readonly x: 4;
      readonly y: 4;
      readonly blur: 32;
      readonly spread: 16;
      readonly color: '0x000000b3';
    };
    readonly text: {
      readonly x: 1;
      readonly y: 1;
      readonly blur: 1;
      readonly spread: 1;
      readonly color: '0x000000b3';
    };
  };
  readonly spacer: {
    readonly none: 0;
    readonly xxs: 2;
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 10;
    readonly lg: 20;
    readonly xl: 30;
    readonly xxl: 40;
    readonly xxxl: 50;
  };
  readonly stroke: {
    readonly none: 0;
    readonly sm: 2;
    readonly md: 4;
    readonly lg: 6;
    readonly xl: 8;
  };
  readonly typography: {
    readonly display1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 75;
      readonly lineHeight: 85;
      readonly fontWeight: 500;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly display2: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 50;
      readonly lineHeight: 60;
      readonly fontWeight: 500;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly display3: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 56;
      readonly fontWeight: 400;
      readonly lineHeight: 68;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly display4: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 48;
      readonly fontWeight: 400;
      readonly lineHeight: 64;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly headline1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 35;
      readonly fontWeight: 500;
      readonly lineHeight: 48;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly headline2: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 30;
      readonly fontWeight: 500;
      readonly lineHeight: 40;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly headline3: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 25;
      readonly fontWeight: 500;
      readonly lineHeight: 36;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly body1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 25;
      readonly fontWeight: 300;
      readonly lineHeight: 40;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly body2: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 22;
      readonly fontWeight: 300;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly body3: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 20;
      readonly fontWeight: 300;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly button1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 25;
      readonly fontWeight: 500;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly button2: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 20;
      readonly fontWeight: 500;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly callout1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 20;
      readonly fontWeight: 500;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly caption1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 15;
      readonly fontWeight: 500;
      readonly lineHeight: 24;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly tag1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 20;
      readonly fontWeight: 500;
      readonly lineHeight: 24;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly footnote1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 22;
      readonly fontWeight: 300;
      readonly lineHeight: 30;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly subtitle1: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 32;
      readonly fontWeight: 400;
      readonly lineHeight: 36;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly subtitle2: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 28;
      readonly fontWeight: 500;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
    readonly navigation: {
      readonly fontFamily: 'Arial';
      readonly fontSize: 28;
      readonly fontWeight: 400;
      readonly lineHeight: 32;
      readonly verticalAlign: 'middle';
      readonly textBaseline: 'bottom';
    };
  };
  readonly componentConfig: {
    readonly Keyboard: {
      readonly base: {
        readonly keyProps: {
          readonly delete: {
            readonly title: null;
            readonly icon: 'data:image/png;base64,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';
          };
        };
      };
    };
  };
};
export default _default;
