# Solid UI

This library contains shared Lightning/Solid components

## Quick Start

If you haven't already, follow the steps found [here](https://github.com/lightning-js/solid) to bootstrap your lightningjs/solid app.

1. install this package and the base theme with your package manager of choice

```sh
npm i @lightningjs/solid-ui @lightningjs/l3-ui-theme-base # or pnpm/yarn
```

2. add the theme package as an alias in your vite config

```js
// vite.config.js
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    }
  },
```

3. add the stateMapperHook to your lightningjs/solid `Config`

```js
// index.jsx
import { mapToneToStateHook } from '@lightningjs/solid-ui';
Config.stateMapperHook = mapToneToStateHook;
```

4. and finally, use a component

```jsx
// App.jsx
import { Button } from '@lightningjs/solid-ui';
<App>
  <Button>a button!</Button>
</App>;
```
