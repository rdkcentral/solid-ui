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
import Metadata from './Metadata.jsx';
import lightning from '../../assets/images/ic_lightning_white_32.png';

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

const meta = {
  title: 'Components/Metadata',
  component: Metadata,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Title text'
    },
    description: {
      description: 'Description text'
    },
    tone: {
      control: { type: 'radio' },
      options: ['neutral', 'inverse', 'brand'],
      description: 'Sets the tone for the component',
      table: {
        defaultValue: { summary: 'neutral' }
      }
    }
  }
};

export default meta;

export const Basic = {
  args: {
    title: 'Title',
    description: lorum,
    maxLines: 3,
    details: {
      title: 'Support text',
      height: 35,
      badges: [{ title: 'TV-14' }, { title: 'HD' }, { title: 'CC' }],
      ratings: [
        {
          iconSrc: lightning,
          title: '76'
        },
        {
          iconSrc: lightning,
          title: '96'
        }
      ]
    },
    width: 770
  }
};
