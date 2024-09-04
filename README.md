# Solid UI

This library contains a suite of [themeable](THEMING.md) UI components written for the [SolidJS Lightning](https://github.com/lightning-tv/solid) Framework. check them out in our [storybook docs](https://rdkcentral.github.io/solid-ui/).

[![npm version](https://img.shields.io/npm/v/@lightningtv%2Fsolid-ui.svg?style=flat)](https://www.npmjs.com/package/@lightningtv/solid-ui)

## Getting Started

If you haven't already, follow the steps found [here](https://github.com/lightning-js/solid) to bootstrap your SolidJS Lightning app. Then:

1. install this package and the base theme with your package manager of choice

```sh
pnpm add @lightningtv/solid-ui @lightningtv/l3-ui-theme-base # or npm/yarn
```

2. add the theme package as an alias in your vite config(see the [theming docs](THEMING.md) for more information on this)

```js
// vite.config.js
  resolve: {
    alias: {
      theme: '@lightningtv/l3-ui-theme-base',
    }
  },
```

3. and finally, use a component

```jsx
// App.jsx
import { Button } from '@lightningtv/solid-ui';
<App>
  <Button>a button!</Button>
</App>;
```

## Reporting a Bug

If you come across a bug in this library, please open an [issue](https://github.com/rdkcentral/solid-ui/issues) with a detailed description of what you've encountered

## Development

If you don't have pnpm

```sh
npm install -g pnpm
```

Run the solid storybook dev environment:

```sh
pnpm i
pnpm dev
```

Run the solid sandbox environment:

```sh
pnpm sandbox
```

## Theming

Theming in the context of solid-ui is a system for providing a set of values to control the look and feel of the components. Head over to our [theming documentation](THEMING.md) for more information
