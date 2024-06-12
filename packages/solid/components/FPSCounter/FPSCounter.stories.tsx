/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

import { FPSCounter } from './FPSCounter.jsx';
import type { Meta, StoryObj } from 'storybook-solidjs';

type Story = StoryObj<typeof FPSCounter>;

/**
 * This component displays the current frames per second (FPS) of the application.
 *
 * To use, import FPSCounter and add it to your component tree.
 * import { setupFPS } from '@lightningtv/solid';
 * On your canvas element add renderer option:
 * fpsUpdateInterval: 200
 * and
 * ref={(root) => setupFPS(root)}
 *
 */
const meta: Meta<typeof FPSCounter> = {
  title: 'Components/FPSCounter',
  component: FPSCounter,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

export const Basic: Story = {
  render: () => {
    return <FPSCounter x={10} y={10} />;
  }
};
