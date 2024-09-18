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

import Artwork from './Artwork.jsx';
import { hexColor } from '@lightningtv/solid';
import type { Meta, StoryObj } from 'storybook-solidjs';
import theme from 'theme';

const meta: Meta<typeof Artwork> = {
  title: 'Components/Artwork',
  component: Artwork,
  argTypes: {
    src: {
      description: 'source URI of the image to be displayed',
      control: { type: 'text' }
    },
    fallbackSrc: {
      description: 'URI of fallback image to be shown if the src request fails',
      control: { type: 'text' }
    },
    fillColor: {
      description: 'solid color background, displayed if src undefined or invalid',
      control: { type: 'color' }
    },
    gradient: {
      description: 'enable to display a gradient overlay, color can be set with `gradientColor`',
      control: { type: 'boolean' },
      default: 'false'
    },
    gradientColor: {
      description: 'Color used in gradient ramp when `gradient="true"`',
      control: { type: 'color' }
    }
  }
};

export default meta;

export const Image: StoryObj<typeof Artwork> = {
  render: args => (
    <Artwork //
      src={args.src}
      fallbackSrc={args.fallbackSrc}
      fillColor={hexColor(args.fillColor) || hexColor(theme.color.blue)}
      gradient={args.gradient}
      gradientColor={hexColor(args.gradientColor) || hexColor(theme.color.blue)}
      width={400}
      height={240}
    />
  ),
  args: {
    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
    fallbackSrc: 'https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg',
    gradient: false
  }
};

export const Color: StoryObj<typeof Artwork> = {
  render: args => (
    <Artwork //
      fillColor={hexColor(args.fillColor) || hexColor(theme.color.blue)}
      width={400}
      height={240}
    />
  ),
  args: {
    gradient: false
  }
};
