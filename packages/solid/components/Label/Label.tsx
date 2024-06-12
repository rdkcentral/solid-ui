import { type Component } from 'solid-js';
import { Text } from '@lightningtv/solid';
import { withPadding } from '../../utils/index.js';
import styles from './Label.styles.js';
import type { LabelProps } from './Label.types.js';
withPadding;

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      color={props.backgroundColor}
      borderRadius={props.radius}
      // @ts-expect-error TODO type needs to be fixed in framework
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        color={props.textColor}
        style={[
          styles.Text.tones[props.tone || styles.tone], //
          styles.Text.base
        ]}
      >
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
