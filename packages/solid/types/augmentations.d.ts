import '@lightningtv/solid';

declare module '@lightningtv/solid' {
  /**
   * Augment the existing IntrinsicCommonProps interface to include our state style keys
   */
  interface IntrinsicNodeStyleProps {
    focus?: IntrinsicNodeStyleProps;
    disabled?: IntrinsicNodeStyleProps;
    // TODO remove when this new solid version is published
    color?: number | string;
  }
  interface IntrinsicTextNodeStyleProps {
    focus?: IntrinsicTextNodeStyleProps;
    disabled?: IntrinsicTextNodeStyleProps;
    // TODO remove when this new solid version is published
    color?: number | string;
  }
}
