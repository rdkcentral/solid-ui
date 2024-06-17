import type { NodeStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';
import type { Signal } from 'solid-js';

export interface InputProps extends UIComponentProps, InputStyleProperties {
  /**
   * non-reactive index of the current cursor currentPosition
   */
  position?: number;

  /**
   * signal passed in to represent what change we want to happen in the input
   */
  keyEvent: Signal<string>;

  /**
   * signal passed in to represent the actual title within the input
   */
  titleSignal: Signal<string>;

  /**
   * when true the content will be masked to the user
   */
  password?: boolean;

  /**
   * character to use as a mask when password is true
   */
  mask?: string;
}

export interface InputStyleProperties {
  /**
   * solid color background of input
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];

  /**
   * corner radius of input
   */
  radius?: NodeStyles['borderRadius'];

  /**
   * where the content is aligned within the input
   */
  justify?: NodeStyles['justifyContent'];

  /**
   * color of text in input
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: NodeStyles['color'];

  /**
   * color of border around badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  strokeColor?: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  strokeWidth?: NodeStyles['borderWidth']; // TODO clew uses
}

export interface InputStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Text: TextStyleSet;
}

export type InputConfig = ComponentStyleConfig<InputStyleProperties>;
