import type { NodeProps, NodeStyles, TextProps, TextStyles } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet, Tone } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface ButtonProps extends UIComponentProps, ButtonStyleProperties {
  children: TextProps['children'];
}

export interface ButtonContainerProps extends UIComponentProps, ButtonStyleProperties {
  children: NodeProps['children'];
}

export interface ButtonStyleProperties {
  /**
   * solid color background of button
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor?: NodeStyles['color'];
  /**
   * color of content in button
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  contentColor?: NodeStyles['color'];
  /**
   * Padding between title and prefix/suffix
   */
  contentSpacing?: number;
  /**
   * where the content is aligned within the button
   */
  justify?: NodeStyles['justifyContent'];
  /**
   * where the text is aligned within the button
   */
  textAlign?: TextStyles['textAlign'];

  /**
   * color of text in button
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor?: TextStyles['color'];
  padding?: number[];

  /**
   * corner radius of button
   */
  radius?: NodeStyles['borderRadius'];
}

export interface ButtonStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Content: NodeStyleSet;
  Text: TextStyleSet;
}

export type ButtonConfig = ComponentStyleConfig<ButtonStyleProperties>;
