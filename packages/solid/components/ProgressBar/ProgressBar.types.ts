import type { NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ProgressBarProps extends UIComponentProps, ProgressBarStyleProperties {
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;
}

export interface ProgressBarStyleProperties {
  /**
   * total height of the component
   */
  height?: NodeStyles['height'];
  /**
   * color of the overlay portion of the progress bar
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  progressColor?: NodeStyles['color'];
  /**
   * color of the background portion of the progress bar
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  barColor?: NodeStyles['color'];
  /**
   * border radius of the progressBar
   */
  radius?: NodeStyles['borderRadius'];
}

export interface ProgressBarStyles {
  tone: Tone;
  Container: NodeStyleSet;
  ProgressBar: NodeStyleSet;
}

export type ProgressBarConfig = ComponentStyleConfig<ProgressBarStyleProperties>;
