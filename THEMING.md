# Theming in solid-ui

## What is theming?

Theming allows a user to provide styles to the components in this UI library. This section is mostly for developers making components to leverage themes along with solid-ui components, or those who are simply curious about how this system functions.

## The Theme file

### Contents of a theme

A theme is made up of the following sections:

- Foundational tokens
  - alpha
  - animation
  - color
  - fonts _(font files)_
  - layout _(margins, gutters, column counts)_
  - radius
  - spacer _(padding)_
  - stroke
  - typography _(text styles)_
- Component config _(component-specific styles)_

#### Foundational tokens

Theme files contain tokens describing the design decisions specific to that theme. These are high-level things like corner radius values, color palettes, and typography styles. These tokens are global in scope and used by all of the components.

For example, there may be a `radius.md` token which represents the value of a medium corner radius, and used by a range of components including buttons, cards, and tiles.

#### Component config

Themes may also contain a set of component-specific styles. Unlike the global foundations, these styles are specific to a single component and not shared.

For example, a component config might contain tokens specifically for a Button's `radius` property. This might normally use the `radius.md` property, but setting the Button's `radius` directly allows a user to change _only_ the appearance of the button without affecting any other components that might use that same global `radius.md` token.

The `componentConfig` section of a theme file is an object whose keys are the names of components in PascalCase (aka ClassCase). The values of this `componentConfig` object are style objects, described in more detail below.

```typescript
componentConfig: Object {
  [ComponentName: string]: Object {
    tone?: 'base' | 'neutral' | 'inverse';
    mode?: 'focus' | 'disabled';
    style?: Object {
      [componentProperty?: string]: any;
      tone?: Object {
        [componentProperty?: string]: any;
        mode?: Object {
          [componentProperty?: string]: any;
        }
      }
      mode?: Object {
        [componentProperty?: string]: any;
      }
    }
  }
}
```

#### Tones

Themes have two main ways of categorizing component variants, which are referred to as **Tones** and **Modes**. Tones describe built-in visual variants of a component. Each solid-ui component supports three tones:

- neutral (the default appearance, using neutral colors)
- inverse (for providing contrast when using neutral colors against an opposite color background)
- brand (meant to call branded focus to an element)

For each component in the `componentConfig` definition, you can specify a different default tone for that component by defining the `tone` property as a string of one of the three tone values: `neutral`, `inverse`, or `brand`. This will cause that given component to render in that tone by default without requiring a user to explicitly specify the tone on each instance.

For example:

```js
componentConfig: {
  ProgressBar: {
    tone: 'brand';
  }
}
```

#### Modes

The other way of categorizing component variants in solid-ui is called **Modes**, which describe the interactive state of a component. Themes and components support a range of modes including:

- none (the default, unfocused state of a component)
- focus (when the component is actively being interacted with)
- disabled (when a user should not be able to interact with a component)

#### Style config

Beyond just setting new defaults for `tone` and `mode`, the component config object can be used to define component-specific styles in a targeted way—allowing users to re-skin specific components without worrying about the effect on other components' appearances.

For each component in the `componentConfig` object, you can include a `style` object which contains overrides for that component's default appearance. Each theme property of a component can be defined in the `style` object, and that value will be used for all tones and modes of that component, in place of any of its defaults.

For example, this definition will set the foreground color of all progress bars to green:

```js
componentConfig: {
  ProgressBar: {
    style: {
      progressColor: 0x00ff00ff;
    }
  }
}
```

#### Tones and modes in the style object

In addition, the `style` object can also contain mode- and tone-specific values for that component. Any property that is a direct child of the `style` object will be applied to every mode and tone of the object—maybe desirable for values like type styles or corner radius values, but potentially less desirable for values like opacity or color.

The `style` object also supports `tone` and `mode` properties, with the value of each being a style object of its own that supports any of a component's theme properties. The values in these nested objects will only be applied to its relevant tone or mode.

For example, this definition will have the following effects:

- All progress bars will have square corners (radius of 0)
- Disabled progress bars for all tones will have an opacity of 25%
- Brand-tone progress bars will be green, but neutral and inverse progress will retain their default colors

```js
componentConfig: {
  ProgressBar: {
    radius: 0,
    style: {
      mode: {
        disabled: { alpha: 0.25 }
      },
      tone: {
        brand: { progressColor: '#00ff00' }
      }
    }
  }
}
```

#### Tones and modes in combination

In certain circumstances, you may need to set the style of a component for a specific combination of mode and tone, like adjusting the text color of an inverse button when it is disabled.

Within the `mode` or `tone` property of the `style` object, you may also specify one level deeper with the other variant.

For example, this configuration will set the "brand" tone progress bar's color to green for most modes, or else to a darker green when the component is disabled:

```js
componentConfig: {
  ProgressBar: {
    style: {
      tone: {
        brand: {
          progressColor: '#00ff00',
          mode: {
            disabled: { progressColor: '#003300' }
          },
        }
      }
    }
  }
}
```

## App Setup

Themes are loaded at compile time by the app bundler (we recommend [vite](https://vitejs.dev/) which is built on top of [rollup](https://rollupjs.org/)). In your bundler config, you'll need to add an import alias. We're working on a plugin to clean this up a little but for now:

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
// vite.config.js
  resolve: {
    alias: {
      theme: path.resolve(__dirname, 'path/to/your/theme.js'),
    }
  },
```

## Authoring Components

### Component Setup

Each themeable element in the Component has a similar style property setup. Making use of [SolidJS styling features](https://lightning-js.github.io/solid/#/styling), we can provide a set of styles that are merged together. This allows us to provide a base set of styles that are then overridden in specific instances.

```jsx
<View style={[styles.Container[tone], styles.Container.base]} />
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
note: the `makeComponentStyles` function handles merging our incoming theme and our style file-defined properties

- `themeKeys` (required)
  - informs which values we should expect a given componentConfig to contain, and the solid style props to which those keys map
- `base` (required)
  - the default styles of a component
- `themeStyles` (required)
  - these come in from the theme, the setup looks the same for each component
- `tones`
  - style overrides which get applied to a component based on it's tone property
- `modes`
  - style overrides which get applied to a component based on it's state
- `modeKeys`
  - an array of valid modes for a given component, defaults to `['focus', 'disabled']`
- `toneKeys`
  - an array of valid tones for a given component, defaults to `['brand', 'inverse', 'neutral']`

### Tones and Modes

Tones, Modes, and ToneModes are defined either in the component style file or the theme's component config.

- tones - overrides to a component's default styles
  - usually an alternate color pallette
- modes - styles that are applied during the component lifecycle, can be thought of as states (focus, disabled, etc)
- toneModes - variations on mode styles that are applied when a component with a specific tone receives that mode
  - ie. when a Button with tone "brand" receives the mode "focus", the styles defined in `brand-focus` would be applied
