import type { NodeStyles, TextProps } from '@lightningtv/solid';
import type { ComponentStyleConfig, NodeStyleSet, Tone, TextStyleSet } from 'types/types.js';
import type { UIComponentProps } from 'types/interfaces.js';

export interface BadgeProps extends UIComponentProps, BadgeStyleProperties {
  /**
   * Badge text
   */
  title?: TextProps['children'];
}

export type BadgeStyleProperties = Partial<{
  /**
   * solid color background of badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  backgroundColor: NodeStyles['color'];

  /**
   * color of text within badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  textColor: NodeStyles['color'];

  /**
   * color of icon within badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  iconColor: NodeStyles['color'];

  /**
   * color of border around badge
   *
   * core reference: {@link https://github.com/lightning-js/renderer/blob/aefee0064a48055b3cf8dd459396ad4996b68ef5/src/main-api/INode.ts#L121 INodeWritableProps.color}
   */
  // strokeColor: NodeStyles['color']; // TODO clew uses strokeColor, but we currently don't account for nested properties (border.color)
  // strokeWidth: NodeStyles['borderWidth']; // TODO clew uses strokeWidth, but we currently don't account for nested properties (border.width)

  /**
   * spacing between badge items
   */
  contentSpacing: NodeStyles['itemSpacing'];

  /**
   * corner radius of badge
   */
  radius?: NodeStyles['borderRadius'];
}>;

export interface BadgeStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Icon: NodeStyleSet;
  Text: TextStyleSet;
}

export type BadgeConfig = ComponentStyleConfig<BadgeStyleProperties>;
