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
import type { NodeProps, NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from '../../types/types.js';
import type { UIComponentProps } from '../../types/interfaces.js';
import type { ProgressBarProps } from '../ProgressBar/ProgressBar.types.js';
import type { ArtworkProps } from '../Artwork/Artwork.types.js';

export interface TileProps extends UIComponentProps, TileStyleProperties {
  /**
   * prop object passed to the child Artwork component
   */
  artwork?: ArtworkProps;

  /**
   * Controls how slotted components will be rendered. By default all slotted
   * components will be hidden until the focus state is applied, where they will
   * then be shown. If `persistentMetadata` is set to `true`, all slotted components
   * will be rendered regardless of focus.
   *
   * "slotted components" refers to any component passed to the following properties:
   * - topLeft
   * - topRight
   * - bottom
   * - inset
   */
  persistentMetadata?: boolean;

  /**
   * component rendered to the upper left corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topLeft?: NodeProps['children'];

  /**
   * component rendered to the upper right corner of the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  topRight?: NodeProps['children'];

  /**
   * component rendered to center of the Tile, flex-aligned to the bottom border
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  inset?: NodeProps['children'];

  /**
   * component rendered below the Tile
   *
   * component will be shown/hidden on focus unless persistentMetadata is true
   *
   * states are not forwarded to this component. if it should react to states
   * applied to the Tile, they must also be set on this component
   */
  bottomCenter?: NodeProps['children'];

  /**
   * props passed to the child ProgressBar, rendered at the bottom of the component.
   * ProgressBar will not appear if progressBar.progress is 0/falsy
   */
  progressBar?: Partial<ProgressBarProps> | undefined;

  padding?: number[];

  children?: NodeProps['children'];
}

export interface TileStyleProperties {
  alpha?: NodeStyles['alpha'];
  /**
   * corner radius of Tile
   */
  radius?: NodeStyles['borderRadius'];
  /**
   * spacing applied to the bottom of the ProgressBar
   */
  paddingYProgress?: number;
  /**
   * Spacing applied between the ProgressBar and Metadata (inset)
   */
  paddingYBetweenContent?: number;
  /**
   * Spacing  between Metadata (bottom) and bottom of artwork
   */
  contentSpacingY?: number;
}

export interface TileStyles {
  tone: Tone;
  Container: NodeStyleSet<{
    padding: number[];
    paddingYProgress: number;
    paddingYBetweenContent: number;
    contentSpacingY: number;
  }>;
  InsetBottom: NodeStyleSet;
  StandardBottom: NodeStyleSet;
  LogoContainer: NodeStyleSet;
}

export type TileConfig = ComponentStyleConfig<TileStyleProperties>;
