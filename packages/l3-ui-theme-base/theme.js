export default {
  name: 'Base Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.7,
    tertiary: 0.1,
    inactive: 0.5,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.3,
    alpha3: 0.5,
    alpha4: 0.7,
    alpha5: 0.9,
    alpha6: 0.95
  },
  animation: {
    duration: {
      none: 0,
      xfast: 100,
      fast: 250,
      normal: 500,
      slow: 750,
      xslow: 900
    },
    delay: { none: 0, xfast: 10, fast: 25, normal: 50, slow: 75, xslow: 90 },
    expressive: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standard: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utility: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utilityEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utilityExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    }
  },
  asset: {
    arrowLeft:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
    arrowRight:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
    backspaceOutline:
      'data:image/png;base64,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',
    check:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
  },
  color: {
    palette: {},
    white: '0xffffffff',
    black: '0x000000ff',
    grey: '0x929096ff',
    red: '0xe74c3cff',
    orange: '0xdc7633ff',
    yellow: '0xf7dc6fff',
    green: '0x2ecc71ff',
    blue: '0x93a9fdff',
    purple: '0x663399ff',
    overlay: '0x181819b3',
    material: '0x181819ff',
    materialNeutral: '0x181819ff',
    materialNeutralElevated: '0x373639ff',
    materialInverse: '0xf8f7faff',
    materialInverseElevated: '0xffffffff',
    materialBrand: '0x000033ff',
    materialBrandElevated: '0x242a65ff',
    textNeutral: '0xf8f7faff',
    textNeutralSecondary: '0xf8f7fab3',
    textNeutralTertiary: '0xf8f7fa1a',
    textNeutralDisabled: '0xf8f7fa80',
    textInverse: '0x181819ff',
    textInverseSecondary: '0x181819b3',
    textInverseTertiary: '0x1818191a',
    textInverseDisabled: '0x18181980',
    textBrand: '0x93a9fdff',
    textBrandSecondary: '0x93a9fdb3',
    textBrandTertiary: '0x93a9fd1a',
    textBrandDisabled: '0x93a9fd80',
    textPositive: '0x2ecc71ff',
    textNegative: '0xe74c3cff',
    textInfo: '0x93a9fdff',
    textCaution: '0xdc7633ff',
    fillTransparent: '0xffffff0',
    fillNeutral: '0xf8f7faff',
    fillNeutralSecondary: '0xf8f7fab3',
    fillNeutralTertiary: '0xf8f7fa1a',
    fillNeutralDisabled: '0xf8f7fa80',
    fillInverse: '0x181819ff',
    fillInverseSecondary: '0x181819b3',
    fillInverseTertiary: '0x1818191a',
    fillInverseDisabled: '0x18181980',
    fillBrand: '0x93a9fdff',
    fillBrandSecondary: '0x93a9fdb3',
    fillBrandTertiary: '0x93a9fd1a',
    fillBrandDisabled: '0x93a9fd80',
    fillPositive: '0x2ecc71ff',
    fillNegative: '0xe74c3cff',
    fillInfo: '0x93a9fdff',
    fillCaution: '0xdc7633ff',
    strokeNeutral: '0xf8f7faff',
    strokeNeutralSecondary: '0xf8f7fab3',
    strokeNeutralTertiary: '0xf8f7fa1a',
    strokeNeutralDisabled: '0xf8f7fa80',
    strokeInverse: '0x181819ff',
    strokeInverseSecondary: '0x181819b3',
    strokeInverseTertiary: '0x1818191a',
    strokeInverseDisabled: '0x18181980',
    strokeBrand: '0x93a9fdff',
    strokeBrandSecondary: '0x93a9fdb3',
    strokeBrandTertiary: '0x93a9fd1a',
    strokeBrandDisabled: '0x93a9fd80',
    strokePositive: '0x2ecc71ff',
    strokeNegative: '0xe74c3cff',
    strokeInfo: '0x93a9fdff',
    strokeCaution: '0xdc7633ff',
    interactiveNeutral: '0xffffff1a',
    interactiveNeutralFocus: '0xffffffff',
    interactiveNeutralFocusSoft: '0xffffff1a',
    interactiveInverse: '0x48474b1a',
    interactiveInverseFocus: '0x48474bff',
    interactiveInverseFocusSoft: '0x48474b1a',
    interactiveBrand: '0xbecffe1a',
    interactiveBrandFocus: '0xbecffeff',
    interactiveBrandFocusSoft: '0xbecffe1a',
    shadowNeutral: '0x000000b3',
    shadowNeutralFocus: '0x000000b3',
    shadowNeutralFocusSoft: '0x000000b3',
    shadowNeutralText: '0x000000ff',
    shadowInverse: '0x000000b3',
    shadowInverseFocus: '0x000000b3',
    shadowInverseFocusSoft: '0x000000b3',
    shadowInverseText: '0x000000ff',
    shadowBrand: '0x000000b3',
    shadowBrandFocus: '0x000000b3',
    shadowBrandFocusSoft: '0x000000b3',
    shadowBrandText: '0x000000ff'
  },
  font: [],
  layout: {
    columnCount: 10,
    focusScale: 1.2,
    gutterX: 20,
    gutterY: 20,
    marginX: 150,
    marginY: 150,
    safe: 50,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: 'Arial',
      fontSize: 75,
      lineHeight: 85,
      fontWeight: 500,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    display2: {
      fontFamily: 'Arial',
      fontSize: 50,
      lineHeight: 60,
      fontWeight: 500,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    display3: {
      fontFamily: 'Arial',
      fontSize: 56,
      fontWeight: 400,
      lineHeight: 68,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    display4: {
      fontFamily: 'Arial',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 64,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline1: {
      fontFamily: 'Arial',
      fontSize: 35,
      fontWeight: 500,
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline2: {
      fontFamily: 'Arial',
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline3: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body1: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontWeight: 300,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body2: {
      fontFamily: 'Arial',
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body3: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    button1: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    button2: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    callout1: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    caption1: {
      fontFamily: 'Arial',
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    tag1: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    footnote1: {
      fontFamily: 'Arial',
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 30,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    subtitle1: {
      fontFamily: 'Arial',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    subtitle2: {
      fontFamily: 'Arial',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    navigation: {
      fontFamily: 'Arial',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    }
  },
  componentConfig: {
    Keyboard: {
      base: {
        keyProps: {
          delete: {
            title: null,
            icon: 'data:image/png;base64,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'
          }
        }
      }
    }
  }
};
