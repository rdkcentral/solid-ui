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
 *
 * Add a focus ring to tile or other items to provide a nice highlight
 * and shadow effect
 *
 * ```js
 * import { View } from '@lightningtv/solid';
 * import { useFocusManager } from '@lightningtv/solid/primitives';
 * import { FocusRing } from '@lightningtv/solid-ui';
 * import { setFocusRing } from '@lightningtv/solid-ui/utils';
 *
 * const App = () => {
 *   let focusRef;
 *   useFocusManager();
 *
 *   onMount(() => {
 *     setFocusRing(focusRef);
 *   });
 *
 *   return (
 *    <View>
 *      <FocusRing ref={focusRef} />
 *      // Other components
 *    </View>
 *   );
 *  };
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
