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
import { Text, View, type IntrinsicNodeStyleProps } from '@lightningtv/solid';
import theme from 'theme';
import Artwork from '../../components/Artwork/Artwork.js';
import Badge from '../../components/Badge/Badge.js';
import Label from '../../components/Label/Label.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';

const meta: Meta = {
  title: 'Recipes/Tile'
};

export default meta;

export const Tile: StoryObj = {
  render: () => (
    <View
      style={{
        width: 400,
        height: 240,
        padding: [40, 10],
        borderRadius: 8
      }}
      autofocus
    >
      <Artwork
        style={{ borderRadius: 8 }}
        src="https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg"
        fallbackSrc="https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"
        gradient={true}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexBoundary: 'contain',
          justifyContent: 'spaceBetween',
          x: 14,
          y: 14,
          width: 376
        }}
      >
        <Badge title="HD" />
        <Label title="Comedy" />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBoundary: 'contain',
          gap: -8,
          mountY: 1,
          x: 14,
          y: 204
        }}
      >
        <Text style={{ ...theme.typography.body1 } as IntrinsicNodeStyleProps}>Title</Text>
        <Text
          style={
            {
              ...theme.typography.body3,
              width: 376,
              contain: 'width',
              maxLines: 1,
              fontWeight: 400
            } as IntrinsicNodeStyleProps
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend
          interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus
          rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a,
          tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta
          tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus
          elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.
        </Text>
      </View>
      <ProgressBar style={{ x: 14, y: 208, borderRadius: 8 }} width={376} progress={0.6} />
    </View>
  )
};
