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
import { Text, View, type NodeStyles, type TextStyles } from '@lightningtv/solid';
import theme from 'theme';
import Badge from '../../components/Badge/Badge.js';

const meta: Meta = {
  title: 'Recipes/Metadata'
};

export default meta;

const containerStyles: NodeStyles = {
  display: 'flex',
  justifyContent: 'flexStart',
  flexBoundary: 'contain'
};

export const Metadata: StoryObj = {
  render: () => (
    <View style={{ ...containerStyles, flexDirection: 'column' }}>
      <Text style={{ ...theme.typography.headline1, fontWeight: 700 } as TextStyles}>Title</Text>
      <Text
        style={
          {
            width: 800,
            contain: 'width',
            maxLines: 3,
            ...theme.typography.body2,
            fontWeight: 400
          } as TextStyles
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum.
        Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel.
        Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce
        tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non
        ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris,
        eu luctus tortor posuere sit amet. Nunc a interdum metus.
      </Text>
      <View style={{ ...containerStyles, flexDirection: 'row', gap: 8 }}>
        <Text style={{ ...theme.typography.body3, marginRight: 16 } as TextStyles}>Support text</Text>
        <Badge title="TV-14" />
        <Badge title="HD" />
        <Badge title="CC" />
      </View>
    </View>
  )
};
