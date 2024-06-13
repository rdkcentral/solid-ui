<!--
  Copyright 2024 Comcast Cable Communications Management, LLC
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  SPDX-License-Identifier: Apache-2.0
-->

# Theming in solid-ui

## What is theming?

Theming allows a user to provide styles to the components in this UI library. This section is mostly for developers making components to leverage themes along with solid-ui components, or those who are simply curious about how this system functions.

## App Setup

(See the README for the full solid-ui setup)

Themes are loaded at compile time by the app bundler (we recommend [vite](https://vitejs.dev/) which is built on top of [rollup](https://rollupjs.org/)). In your bundler config, you'll need add an import alias.

_the app will not run without this configuration_

in vite for example:

```js
// vite.config.js
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    }
  },
```

or if you have your own local theme:

```js
  resolve: {
    alias: {
      theme: path.resolve(__dirname, 'path/to/your/theme.js'),
    }
  },
```

## Component Setup

Each themeable element in the Component has a similar style property setup. Making use of [SolidJS styling features](https://lightning-js.github.io/solid/#/styling), we can provide a set of styles that are merged together. This allows us to provide a base set of styles that are then overridden in specific instances.

```jsx
<View style={[props.styles, styles.Container[props.tone || styles.tone], props?.style?.Container]} />
```

### Theme File

Contains values which can be referenced via `theme.property.path` in the style file (more on that below), and component configs which is how we create theme-level component styles.

One config could look something like this:

```js
{
  componentConfig: {
    ComponentName: {
      base: {
        // base style overrides
        color: 'red'
      },
      focus: {
        // focus specific styles
        color: 'purple'
      },
      // ...any other tone mode style overrides
    }
  }
}
```

### Style Files

returns an object containing each component element's styles, and the tone.
something like

```js
{
  tone: 'neutral',
  Container: containerStyles,
  Text: textStyles
}
```

Each style file contains a config which will get passed to `makeComponentStyles` and has the following properties:

- `themeKeys`
  - informs which values we should expect a given componentConfig to contain, and the solid style props to which those keys map
- `base`
  - the default styles of a component
- `toneModes`
  - style overrides that'll get applied to a component based on it's states (which will represent tones, modes, and toneModes)
- `themeStyles`
  - these come in from the theme, the setup looks the same for each component
- `toneModeFallbackMap` (optional)
  - defines which mode/tone each tone/mode should fall back to. a default exists, this is only necessary for component-level map overrides

### Tones and Modes

Tones, Modes, and ToneModes are defined either in the component style file or the theme's component config.

- tones - overrides to a component's default styles
  - usually an alternate color pallette
- modes - styles that are applied during the component lifecycle, can be thought of as states (focus, disabled, etc)
- toneModes - variations on mode styles that are applied when a component with a specific tone receives that mode
  - ie. when a Button with tone "brand" receives the mode "focus", the styles defined in `brand-focus` would be applied
