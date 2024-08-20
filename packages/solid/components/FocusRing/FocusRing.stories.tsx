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
import type { Meta, StoryObj } from 'storybook-solidjs';
import FocusRing from './FocusRing.jsx';

type Story = StoryObj<typeof FocusRing>;

/**
 * Fancy ring to focus on Items.
 *
 * ## Usage
 * #### 1. Necessary imports:
 *
 * - `useFocusManager`: This primitive is used to manage focus within the application. See more on `useFocusManager` [here](https://lightning-tv.github.io/solid/#/primitives/useFocusManager?id=usefocusmanager-for-key-handling).
 * - `onMount`: This lifecyle is used to run code after the component has mounted.
 * - `setFocusRing`: This function in the FocusRing package is used to set the FocusRing reference and position the component on the current `activeElement`.
 * - `FocusRing` : The FocusRing itself.
 *
 * ```js
 * import { onMount } from 'solid-js';
 * import { useFocusManager } from '@lightningtv/solid/primitives';
 * import { FocusRing, setFocusRing } from '@lightningtv/solid-ui';
 * ```
 * #### 2. Create a ref:
 * - Declare a ref variable that will hold a reference to the `FocusRing` component. For example `let focusRef;`
 *
 * #### 3. Use the focus manager:
 * - Use the focus manager (`useFocusManager();`) primitive to activate focus management.
 *
 * #### 4. Use the FocusRing reference after the components are rendered:
 * - This code runs after the component has mounted. It calls the `setFocusRing` function to position the FocusRing to the current `activeElement` using the ref variable.
 *
 * ```js
 * onMount(() => {
 *    setFocusRing(focusRef);
 * });
 * ```
 * #### 5. Render the FocusRing component and use the declared reference variable:
 * - This line renders the `FocusRing` component, passing `focusRef` as a prop. This allows the `setFocusRing` function to associate the FocusRing with the component instance.
 *
 * ```js
 * <FocusRing ref={focusRef} />
 * ```
 * ## Example usage
 *
 * ```js
 * import { View } from '@lightningtv/solid';
 * import { onMount } from 'solid-js';
 * import { useFocusManager } from '@lightningtv/solid/primitives';
 * import { Button, FocusRing, setFocusRing } from '@lightningtv/solid-ui';
 *
 * const App = () => {
 *  let focusRef;            // Declared reference variables
 *  useFocusManager();       // Primitive that manages focus
 *
 *  onMount(() => {          // Function that runs after components are mounted
 *    setFocusRing(focusRef);// Sets rings location to the current focused element
 *  });
 *
 *  return (
 *    <View>
 *      <FocusRing ref={focusRef} /> // Passing the ref variable as a ref prop
 *      // Other components that use receive focus
 *      <Button autofocus width={100}> 1 </Button>
 *      <Button width={100}> 2 </Button>
 *    </View>
 *  );
 * };
 *
 * export default App;
 * ```
 */

const meta: Meta<typeof FocusRing> = {
  title: 'Components/FocusRing',
  component: FocusRing,
  tags: ['autodocs']
};

export default meta;

export const Basic: Story = {
  render: args => {
    return <FocusRing {...args} width={350} height={200} />;
  },
  args: {}
};
