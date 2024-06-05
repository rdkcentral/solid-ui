export default {
  name: 'Mosaic Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.7,
    tertiary: 0.3,
    inactive: 0.1,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.15,
    alpha3: 0.2,
    alpha4: 0.3,
    alpha5: 0.7,
    alpha6: 0.8
  },
  animation: {
    duration: {
      none: 0,
      xfast: 200,
      fast: 400,
      normal: 600,
      slow: 800,
      xslow: 1000
    },
    delay: { none: 0, xfast: 20, fast: 40, normal: 60, slow: 80, xslow: 100 },
    expressive: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
      delay: 0,
      duration: 0.6
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
      delay: 0,
      duration: 0.4
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.8, 0.4)',
      delay: 0,
      duration: 0.2
    },
    standard: {
      timingFunction: 'cubic-bezier(0.6, 0, 0.1, 1)',
      delay: 0,
      duration: 0.6
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.15, 1)',
      delay: 0,
      duration: 0.2
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0.9, 0, 1, 1)',
      delay: 0,
      duration: 0.2
    },
    utility: {
      timingFunction: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
      delay: 0,
      duration: 0.4
    },
    utilityEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
      delay: 0,
      duration: 0.6
    },
    utilityExit: {
      timingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
      delay: 0,
      duration: 0.6
    }
  },
  asset: {
    arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
    arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
    backspaceOutline: 'data:image/png;base64,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',
    check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
  },
  color: {
    palette: {},
    white: '0xffffffff',
    black: '0x000000ff',
    grey: '0x8b8b97ff',
    red: '0xff3f3fff',
    orange: '0xf95600ff',
    yellow: '0xffaa00ff',
    green: '0x0ac284ff',
    blue: '0x2970ffff',
    purple: '0x704bf7ff',
    overlay: '0x081414cc',
    material: '0x081414ff',
    materialNeutral: '0x081414ff',
    materialNeutralElevated: '0x232328ff',
    materialInverse: '0xf1f1f1ff',
    materialInverseElevated: '0xffffffff',
    materialBrand: '0x101717ff',
    materialBrandElevated: '0x1a2525ff',
    textNeutral: '0xf1f1f1ff',
    textNeutralSecondary: '0xf1f1f1b3',
    textNeutralTertiary: '0xf1f1f14d',
    textNeutralDisabled: '0xf1f1f11a',
    textInverse: '0x081414ff',
    textInverseSecondary: '0x081414b3',
    textInverseTertiary: '0x0814144d',
    textInverseDisabled: '0x0814141a',
    textBrand: '0x19c2b5ff',
    textBrandSecondary: '0x19c2b5b3',
    textBrandTertiary: '0x19c2b54d',
    textBrandDisabled: '0x19c2b51a',
    textPositive: '0x0ac284ff',
    textNegative: '0xff3f3fff',
    textInfo: '0x2970ffff',
    textCaution: '0xf95600ff',
    fillTransparent: '0xf1f1f10',
    fillNeutral: '0xf1f1f1ff',
    fillNeutralSecondary: '0xf1f1f1b3',
    fillNeutralTertiary: '0xf1f1f14d',
    fillNeutralDisabled: '0xf1f1f11a',
    fillInverse: '0x081414ff',
    fillInverseSecondary: '0x081414b3',
    fillInverseTertiary: '0x0814144d',
    fillInverseDisabled: '0x0814141a',
    fillBrand: '0x19c2b5ff',
    fillBrandSecondary: '0x19c2b5b3',
    fillBrandTertiary: '0x19c2b54d',
    fillBrandDisabled: '0x19c2b51a',
    fillPositive: '0x0ac284ff',
    fillNegative: '0xff3f3fff',
    fillInfo: '0x2970ffff',
    fillCaution: '0xf95600ff',
    strokeNeutral: '0xf1f1f1ff',
    strokeNeutralSecondary: '0xf1f1f1b3',
    strokeNeutralTertiary: '0xf1f1f14d',
    strokeNeutralDisabled: '0xf1f1f11a',
    strokeInverse: '0x081414ff',
    strokeInverseSecondary: '0x081414b3',
    strokeInverseTertiary: '0x0814144d',
    strokeInverseDisabled: '0x0814141a',
    strokeBrand: '0x19c2b5ff',
    strokeBrandSecondary: '0x19c2b5b3',
    strokeBrandTertiary: '0x19c2b54d',
    strokeBrandDisabled: '0x19c2b51a',
    strokePositive: '0x0ac284ff',
    strokeNegative: '0xff3f3fff',
    strokeInfo: '0x2970ffff',
    strokeCaution: '0xf95600ff',
    interactiveNeutral: '0xf1f1f126',
    interactiveNeutralFocus: '0xf1f1f14d',
    interactiveNeutralFocusSoft: '0xf1f1f133',
    interactiveInverse: '0x08141426',
    interactiveInverseFocus: '0x0814144d',
    interactiveInverseFocusSoft: '0x08141433',
    interactiveBrand: '0x19c2b526',
    interactiveBrandFocus: '0x19c2b54d',
    interactiveBrandFocusSoft: '0x19c2b533',
    shadowNeutral: '0x0000004d',
    shadowNeutralFocus: '0x0000004d',
    shadowNeutralFocusSoft: '0x0000004d',
    shadowNeutralText: '0x000000cc',
    shadowInverse: '0x0000004d',
    shadowInverseFocus: '0x0000004d',
    shadowInverseFocusSoft: '0x0000004d',
    shadowInverseText: '0x000000cc',
    shadowBrand: '0x0000004d',
    shadowBrandFocus: '0x0000004d',
    shadowBrandFocusSoft: '0x0000004d',
    shadowBrandText: '0x000000cc'
  },
  font: [
    {
      family: 'Inter',
      src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2',
      descriptors: { weight: '100 900' }
    }
  ],
  layout: {
    columnCount: 12,
    focusScale: 1.08,
    gutterX: 24,
    gutterY: 88,
    marginX: 152,
    marginY: 152,
    safe: 48,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 2, sm: 4, md: 6, lg: 8, xl: 10, round: 1000 },
  spacer: {
    none: 0,
    xxs: 4,
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 40
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: 'Inter',
      fontSize: 112,
      lineHeight: 120,
      fontWeight: 300,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    display2: {
      fontFamily: 'Inter',
      fontSize: 72,
      lineHeight: 82,
      fontWeight: 400,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    display3: {
      fontFamily: 'Inter',
      fontSize: 56,
      fontWeight: 400,
      lineHeight: 68,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    display4: {
      fontFamily: 'Inter',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 64,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    headline1: {
      fontFamily: 'Inter',
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 46,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    headline2: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    headline3: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    body3: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    button1: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    button2: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    callout1: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 28,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    caption1: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 28,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    tag1: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    footnote1: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 28,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc'
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc',
      letterSpacing: 0
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc',
      letterSpacing: 0
    },
    navigation: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLinesSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: '0x000000cc',
      letterSpacing: 0
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
        },
        keySpacing: 6
      }
    },
    Distractor: { defaultTone: 'brand' },
    FocusRing: {
      defaultTone: 'brand',
      base: {
        borderWidth: 4,
        color: '0x0d9d9d9',
        spacing: -4,
        shouldAnimate: false,
        transitionColor: '0x0d9d9d9',
        secondaryColor: '0x0d9d9d9'
      }
    },
    Label: {
      defaultTone: 'brand',
      base: { radius: 2 },
      brand: { backgroundColor: '0x19c2b5b3' }
    },
    Lozenge: {
      defaultTone: 'brand',
      base: { radius: 6, highlightRadius: '0x0000065fa' },
      focused: { radius: 10, highlightRadius: '0x00000a9f6' }
    },
    ProgressBar: { defaultTone: 'brand', base: { h: 6, radius: 4 } },
    Wave: { defaultTone: 'brand' },
    RailLozenge: {
      base: {
        gradient: [
          [ '#CEF6F3', '#6EDBD2' ],
          [ '#6BDAD1', '#1ABBAF' ],
          [ '#1AB8AD', '#1A827E' ],
          [ '#1A817D', '#1A4C4F' ],
          [ '#194C4E', '#0E3638' ]
        ]
      }
    },
    Button: {
      base: {
        focusScaleGapX: 16,
        radius: 6,
        textStyle: { textColor: '0xf1f1f1ff' },
        contentColor: '0xf1f1f1ff'
      },
      focused: { radius: 10 }
    },
    Card: { base: { radius: 6 }, focused: { radius: 10 } },
    Key: { base: { baseWidth: 61, height: 61, minWidth: 61 } },
    KeyboardSearch: {
      base: {
        keyProps: {
          number: {
            style: {
              mode: { unfocused: { backgroundColor: [ '#F1F1F1', 0 ] } }
            }
          }
        }
      }
    },
    ListItem: {
      base: {
        radius: 6,
        textStyle: { textColor: '0xf1f1f1ff' },
        titleTextStyle: { textColor: '0xf1f1f1ff' },
        descriptionTextStyle: { textColor: '0xf1f1f1ff' },
        contentColor: '0xf1f1f1ff'
      },
      focused: { radius: 10 }
    },
    MetadataTile: {
      base: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: '0x000000cc',
          fontFamily: 'Inter',
          fontSize: 32,
          fontStyle: '400',
          lineHeight: 36
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: '0x000000cc',
          fontFamily: 'Inter',
          fontSize: 28,
          fontStyle: '400',
          lineHeight: 32
        }
      },
      focused: {
        titleTextStyle: undefined,
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLinesSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: '0x000000cc',
          fontFamily: 'Inter',
          fontSize: 28,
          fontStyle: '400',
          lineHeight: 32
        }
      }
    },
    NetworkCell: { base: { focusScaleGapX: 4 } },
    ProgramCell: { base: { focusScaleGapX: 4 } },
    Surface: { base: { radius: 6 }, focused: { radius: 10 } },
    Tile: {
      base: { radius: 6, metadataLocation: 'inset' },
      focused: { paddingY: 20, radius: 10 }
    }
  }
}