<!--
  Copyright 2023 Comcast Cable Communications Management, LLC
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
