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

declare namespace _default {
  let name: string;
  namespace alpha {
    let primary: number;
    let secondary: number;
    let tertiary: number;
    let inactive: number;
    let full: number;
    let none: number;
    let alpha1: number;
    let alpha2: number;
    let alpha3: number;
    let alpha4: number;
    let alpha5: number;
    let alpha6: number;
  }
  namespace animation {
    namespace duration {
      let none_1: number;
      export { none_1 as none };
      export let xfast: number;
      export let fast: number;
      export let normal: number;
      export let slow: number;
      export let xslow: number;
    }
    namespace delay {
      let none_2: number;
      export { none_2 as none };
      let xfast_1: number;
      export { xfast_1 as xfast };
      let fast_1: number;
      export { fast_1 as fast };
      let normal_1: number;
      export { normal_1 as normal };
      let slow_1: number;
      export { slow_1 as slow };
      let xslow_1: number;
      export { xslow_1 as xslow };
    }
    namespace expressive {
      let delay_1: number;
      export { delay_1 as delay };
      let duration_1: number;
      export { duration_1 as duration };
      export let easing: string;
    }
    namespace expressiveEntrance {
      let delay_2: number;
      export { delay_2 as delay };
      let duration_2: number;
      export { duration_2 as duration };
      let easing_1: string;
      export { easing_1 as easing };
    }
    namespace expressiveExit {
      let delay_3: number;
      export { delay_3 as delay };
      let duration_3: number;
      export { duration_3 as duration };
      let easing_2: string;
      export { easing_2 as easing };
    }
    namespace standard {
      let delay_4: number;
      export { delay_4 as delay };
      let duration_4: number;
      export { duration_4 as duration };
      let easing_3: string;
      export { easing_3 as easing };
    }
    namespace standardEntrance {
      let delay_5: number;
      export { delay_5 as delay };
      let duration_5: number;
      export { duration_5 as duration };
      let easing_4: string;
      export { easing_4 as easing };
    }
    namespace standardExit {
      let delay_6: number;
      export { delay_6 as delay };
      let duration_6: number;
      export { duration_6 as duration };
      let easing_5: string;
      export { easing_5 as easing };
    }
    namespace utility {
      let delay_7: number;
      export { delay_7 as delay };
      let duration_7: number;
      export { duration_7 as duration };
      let easing_6: string;
      export { easing_6 as easing };
    }
    namespace utilityEntrance {
      let delay_8: number;
      export { delay_8 as delay };
      let duration_8: number;
      export { duration_8 as duration };
      let easing_7: string;
      export { easing_7 as easing };
    }
    namespace utilityExit {
      let delay_9: number;
      export { delay_9 as delay };
      let duration_9: number;
      export { duration_9 as duration };
      let easing_8: string;
      export { easing_8 as easing };
    }
  }
  namespace asset {
    let arrowLeft: string;
    let arrowRight: string;
    let backspaceOutline: string;
    let check: string;
  }
  namespace color {
    let palette: {};
    let white: string;
    let black: string;
    let grey: string;
    let red: string;
    let orange: string;
    let yellow: string;
    let green: string;
    let blue: string;
    let purple: string;
    let overlay: string;
    let material: string;
    let materialNeutral: string;
    let materialNeutralElevated: string;
    let materialInverse: string;
    let materialInverseElevated: string;
    let materialBrand: string;
    let materialBrandElevated: string;
    let textNeutral: string;
    let textNeutralSecondary: string;
    let textNeutralTertiary: string;
    let textNeutralDisabled: string;
    let textInverse: string;
    let textInverseSecondary: string;
    let textInverseTertiary: string;
    let textInverseDisabled: string;
    let textBrand: string;
    let textBrandSecondary: string;
    let textBrandTertiary: string;
    let textBrandDisabled: string;
    let textOnBrand: string;
    let textOnBrandSecondary: string;
    let textOnBrandTertiary: string;
    let textOnBrandDisabled: string;
    let textPositive: string;
    let textNegative: string;
    let textInfo: string;
    let textCaution: string;
    let fillTransparent: string;
    let fillNeutral: string;
    let fillNeutralSecondary: string;
    let fillNeutralTertiary: string;
    let fillNeutralDisabled: string;
    let fillInverse: string;
    let fillInverseSecondary: string;
    let fillInverseTertiary: string;
    let fillInverseDisabled: string;
    let fillBrand: string;
    let fillBrandSecondary: string;
    let fillBrandTertiary: string;
    let fillBrandDisabled: string;
    let fillPositive: string;
    let fillNegative: string;
    let fillInfo: string;
    let fillCaution: string;
    let strokeNeutral: string;
    let strokeNeutralSecondary: string;
    let strokeNeutralTertiary: string;
    let strokeNeutralDisabled: string;
    let strokeInverse: string;
    let strokeInverseSecondary: string;
    let strokeInverseTertiary: string;
    let strokeInverseDisabled: string;
    let strokeBrand: string;
    let strokeBrandSecondary: string;
    let strokeBrandTertiary: string;
    let strokeBrandDisabled: string;
    let strokeOnBrand: string;
    let strokeOnBrandSecondary: string;
    let strokeOnBrandTertiary: string;
    let strokeOnBrandDisabled: string;
    let strokePositive: string;
    let strokeNegative: string;
    let strokeInfo: string;
    let strokeCaution: string;
    let interactiveNeutral: string;
    let interactiveNeutralFocus: string;
    let interactiveNeutralFocusSoft: string;
    let interactiveInverse: string;
    let interactiveInverseFocus: string;
    let interactiveInverseFocusSoft: string;
    let interactiveBrand: string;
    let interactiveBrandFocus: string;
    let interactiveBrandFocusSoft: string;
    let shadowDefault: string;
    let shadowFocused: string;
    let shadowElevated: string;
    let shadowText: string;
    let shadowNeutral: string;
    let shadowNeutralFocus: string;
    let shadowNeutralElevated: string;
    let shadowNeutralText: string;
    let shadowInverse: string;
    let shadowInverseFocus: string;
    let shadowInverseElevated: string;
    let shadowInverseText: string;
    let shadowBrand: string;
    let shadowBrandFocus: string;
    let shadowBrandElevated: string;
    let shadowBrandText: string;
  }
  let font: never[];
  namespace layout {
    let columnCount: number;
    let focusScale: number;
    let gutterX: number;
    let gutterY: number;
    let marginX: number;
    let marginY: number;
    let safe: number;
    let screenW: number;
    let screenH: number;
  }
  namespace radius {
    let none_3: number;
    export { none_3 as none };
    export let xs: number;
    export let sm: number;
    export let md: number;
    export let lg: number;
    export let xl: number;
  }
  namespace shadow {
    namespace _default {
      export let x: number;
      export let y: number;
      export let blur: number;
      export let spread: number;
      let color_1: string;
      export { color_1 as color };
    }
    export { _default as default };
    export namespace focused {
      let x_1: number;
      export { x_1 as x };
      let y_1: number;
      export { y_1 as y };
      let blur_1: number;
      export { blur_1 as blur };
      let spread_1: number;
      export { spread_1 as spread };
      let color_2: string;
      export { color_2 as color };
    }
    export namespace elevated {
      let x_2: number;
      export { x_2 as x };
      let y_2: number;
      export { y_2 as y };
      let blur_2: number;
      export { blur_2 as blur };
      let spread_2: number;
      export { spread_2 as spread };
      let color_3: string;
      export { color_3 as color };
    }
    export namespace text {
      let x_3: number;
      export { x_3 as x };
      let y_3: number;
      export { y_3 as y };
      let blur_3: number;
      export { blur_3 as blur };
      let spread_3: number;
      export { spread_3 as spread };
      let color_4: string;
      export { color_4 as color };
    }
  }
  namespace spacer {
    let none_4: number;
    export { none_4 as none };
    export let xxs: number;
    let xs_1: number;
    export { xs_1 as xs };
    let sm_1: number;
    export { sm_1 as sm };
    let md_1: number;
    export { md_1 as md };
    let lg_1: number;
    export { lg_1 as lg };
    let xl_1: number;
    export { xl_1 as xl };
    export let xxl: number;
    export let xxxl: number;
  }
  namespace stroke {
    let none_5: number;
    export { none_5 as none };
    let sm_2: number;
    export { sm_2 as sm };
    let md_2: number;
    export { md_2 as md };
    let lg_2: number;
    export { lg_2 as lg };
    let xl_2: number;
    export { xl_2 as xl };
  }
  namespace typography {
    namespace display1 {
      let fontFamily: string;
      let fontSize: number;
      let lineHeight: number;
      let fontWeight: number;
      let verticalAlign: string;
      let textBaseline: string;
    }
    namespace display2 {
      let fontFamily_1: string;
      export { fontFamily_1 as fontFamily };
      let fontSize_1: number;
      export { fontSize_1 as fontSize };
      let lineHeight_1: number;
      export { lineHeight_1 as lineHeight };
      let fontWeight_1: number;
      export { fontWeight_1 as fontWeight };
      let verticalAlign_1: string;
      export { verticalAlign_1 as verticalAlign };
      let textBaseline_1: string;
      export { textBaseline_1 as textBaseline };
    }
    namespace display3 {
      let fontFamily_2: string;
      export { fontFamily_2 as fontFamily };
      let fontSize_2: number;
      export { fontSize_2 as fontSize };
      let fontWeight_2: number;
      export { fontWeight_2 as fontWeight };
      let lineHeight_2: number;
      export { lineHeight_2 as lineHeight };
      let verticalAlign_2: string;
      export { verticalAlign_2 as verticalAlign };
      let textBaseline_2: string;
      export { textBaseline_2 as textBaseline };
    }
    namespace display4 {
      let fontFamily_3: string;
      export { fontFamily_3 as fontFamily };
      let fontSize_3: number;
      export { fontSize_3 as fontSize };
      let fontWeight_3: number;
      export { fontWeight_3 as fontWeight };
      let lineHeight_3: number;
      export { lineHeight_3 as lineHeight };
      let verticalAlign_3: string;
      export { verticalAlign_3 as verticalAlign };
      let textBaseline_3: string;
      export { textBaseline_3 as textBaseline };
    }
    namespace headline1 {
      let fontFamily_4: string;
      export { fontFamily_4 as fontFamily };
      let fontSize_4: number;
      export { fontSize_4 as fontSize };
      let fontWeight_4: number;
      export { fontWeight_4 as fontWeight };
      let lineHeight_4: number;
      export { lineHeight_4 as lineHeight };
      let verticalAlign_4: string;
      export { verticalAlign_4 as verticalAlign };
      let textBaseline_4: string;
      export { textBaseline_4 as textBaseline };
    }
    namespace headline2 {
      let fontFamily_5: string;
      export { fontFamily_5 as fontFamily };
      let fontSize_5: number;
      export { fontSize_5 as fontSize };
      let fontWeight_5: number;
      export { fontWeight_5 as fontWeight };
      let lineHeight_5: number;
      export { lineHeight_5 as lineHeight };
      let verticalAlign_5: string;
      export { verticalAlign_5 as verticalAlign };
      let textBaseline_5: string;
      export { textBaseline_5 as textBaseline };
    }
    namespace headline3 {
      let fontFamily_6: string;
      export { fontFamily_6 as fontFamily };
      let fontSize_6: number;
      export { fontSize_6 as fontSize };
      let fontWeight_6: number;
      export { fontWeight_6 as fontWeight };
      let lineHeight_6: number;
      export { lineHeight_6 as lineHeight };
      let verticalAlign_6: string;
      export { verticalAlign_6 as verticalAlign };
      let textBaseline_6: string;
      export { textBaseline_6 as textBaseline };
    }
    namespace body1 {
      let fontFamily_7: string;
      export { fontFamily_7 as fontFamily };
      let fontSize_7: number;
      export { fontSize_7 as fontSize };
      let fontWeight_7: number;
      export { fontWeight_7 as fontWeight };
      let lineHeight_7: number;
      export { lineHeight_7 as lineHeight };
      let verticalAlign_7: string;
      export { verticalAlign_7 as verticalAlign };
      let textBaseline_7: string;
      export { textBaseline_7 as textBaseline };
    }
    namespace body2 {
      let fontFamily_8: string;
      export { fontFamily_8 as fontFamily };
      let fontSize_8: number;
      export { fontSize_8 as fontSize };
      let fontWeight_8: number;
      export { fontWeight_8 as fontWeight };
      let lineHeight_8: number;
      export { lineHeight_8 as lineHeight };
      let verticalAlign_8: string;
      export { verticalAlign_8 as verticalAlign };
      let textBaseline_8: string;
      export { textBaseline_8 as textBaseline };
    }
    namespace body3 {
      let fontFamily_9: string;
      export { fontFamily_9 as fontFamily };
      let fontSize_9: number;
      export { fontSize_9 as fontSize };
      let fontWeight_9: number;
      export { fontWeight_9 as fontWeight };
      let lineHeight_9: number;
      export { lineHeight_9 as lineHeight };
      let verticalAlign_9: string;
      export { verticalAlign_9 as verticalAlign };
      let textBaseline_9: string;
      export { textBaseline_9 as textBaseline };
    }
    namespace button1 {
      let fontFamily_10: string;
      export { fontFamily_10 as fontFamily };
      let fontSize_10: number;
      export { fontSize_10 as fontSize };
      let fontWeight_10: number;
      export { fontWeight_10 as fontWeight };
      let lineHeight_10: number;
      export { lineHeight_10 as lineHeight };
      let verticalAlign_10: string;
      export { verticalAlign_10 as verticalAlign };
      let textBaseline_10: string;
      export { textBaseline_10 as textBaseline };
    }
    namespace button2 {
      let fontFamily_11: string;
      export { fontFamily_11 as fontFamily };
      let fontSize_11: number;
      export { fontSize_11 as fontSize };
      let fontWeight_11: number;
      export { fontWeight_11 as fontWeight };
      let lineHeight_11: number;
      export { lineHeight_11 as lineHeight };
      let verticalAlign_11: string;
      export { verticalAlign_11 as verticalAlign };
      let textBaseline_11: string;
      export { textBaseline_11 as textBaseline };
    }
    namespace callout1 {
      let fontFamily_12: string;
      export { fontFamily_12 as fontFamily };
      let fontSize_12: number;
      export { fontSize_12 as fontSize };
      let fontWeight_12: number;
      export { fontWeight_12 as fontWeight };
      let lineHeight_12: number;
      export { lineHeight_12 as lineHeight };
      let verticalAlign_12: string;
      export { verticalAlign_12 as verticalAlign };
      let textBaseline_12: string;
      export { textBaseline_12 as textBaseline };
    }
    namespace caption1 {
      let fontFamily_13: string;
      export { fontFamily_13 as fontFamily };
      let fontSize_13: number;
      export { fontSize_13 as fontSize };
      let fontWeight_13: number;
      export { fontWeight_13 as fontWeight };
      let lineHeight_13: number;
      export { lineHeight_13 as lineHeight };
      let verticalAlign_13: string;
      export { verticalAlign_13 as verticalAlign };
      let textBaseline_13: string;
      export { textBaseline_13 as textBaseline };
    }
    namespace tag1 {
      let fontFamily_14: string;
      export { fontFamily_14 as fontFamily };
      let fontSize_14: number;
      export { fontSize_14 as fontSize };
      let fontWeight_14: number;
      export { fontWeight_14 as fontWeight };
      let lineHeight_14: number;
      export { lineHeight_14 as lineHeight };
      let verticalAlign_14: string;
      export { verticalAlign_14 as verticalAlign };
      let textBaseline_14: string;
      export { textBaseline_14 as textBaseline };
    }
    namespace footnote1 {
      let fontFamily_15: string;
      export { fontFamily_15 as fontFamily };
      let fontSize_15: number;
      export { fontSize_15 as fontSize };
      let fontWeight_15: number;
      export { fontWeight_15 as fontWeight };
      let lineHeight_15: number;
      export { lineHeight_15 as lineHeight };
      let verticalAlign_15: string;
      export { verticalAlign_15 as verticalAlign };
      let textBaseline_15: string;
      export { textBaseline_15 as textBaseline };
    }
    namespace subtitle1 {
      let fontFamily_16: string;
      export { fontFamily_16 as fontFamily };
      let fontSize_16: number;
      export { fontSize_16 as fontSize };
      let fontWeight_16: number;
      export { fontWeight_16 as fontWeight };
      let lineHeight_16: number;
      export { lineHeight_16 as lineHeight };
      let verticalAlign_16: string;
      export { verticalAlign_16 as verticalAlign };
      let textBaseline_16: string;
      export { textBaseline_16 as textBaseline };
    }
    namespace subtitle2 {
      let fontFamily_17: string;
      export { fontFamily_17 as fontFamily };
      let fontSize_17: number;
      export { fontSize_17 as fontSize };
      let fontWeight_17: number;
      export { fontWeight_17 as fontWeight };
      let lineHeight_17: number;
      export { lineHeight_17 as lineHeight };
      let verticalAlign_17: string;
      export { verticalAlign_17 as verticalAlign };
      let textBaseline_17: string;
      export { textBaseline_17 as textBaseline };
    }
    namespace navigation {
      let fontFamily_18: string;
      export { fontFamily_18 as fontFamily };
      let fontSize_18: number;
      export { fontSize_18 as fontSize };
      let fontWeight_18: number;
      export { fontWeight_18 as fontWeight };
      let lineHeight_18: number;
      export { lineHeight_18 as lineHeight };
      let verticalAlign_18: string;
      export { verticalAlign_18 as verticalAlign };
      let textBaseline_18: string;
      export { textBaseline_18 as textBaseline };
    }
  }
  namespace componentConfig {
    namespace Keyboard {
      namespace base {
        namespace keyProps {
          export namespace _delete {
            let title: null;
            let icon: string;
          }
          export { _delete as delete };
        }
      }
    }
  }
}
export default _default;
//# sourceMappingURL=themeStyles.l3.d.ts.map
