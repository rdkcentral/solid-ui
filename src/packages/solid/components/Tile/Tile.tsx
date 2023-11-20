import { Component, createMemo, createSignal, Setter } from 'solid-js';
import { Show, type IntrinsicNodeProps, View, Text } from '@lightningjs/solid';
import ProgressBar, { type ProgressBarProps } from '../ProgressBar/ProgressBar';
import Badge, { type BadgeProps } from '../Badge/Badge';
import Checkbox, { type CheckboxProps } from '../Checkbox/Checkbox';
import Metadata, { type MetadataProps } from '../Metadata/Metadata';
import styles from './Tile.styles';
import { withPadding } from '@lightningjs/solid-primitives';
import Label, { type LabelProps } from './Label';
withPadding;

export interface TileProps extends TileStyleProps, IntrinsicNodeProps {
  /**
   * String to img source for artwork
   */
  artwork: string; //TODO: right now artwork is a path, do we want it to be its own thing?
  /**
   * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
   */
  badge?: Partial<BadgeProps>;
  /**
   * Source of logo
   */
  logo?: string;
  /**
   * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
   */
  checkbox?: Partial<CheckboxProps>;
  /**
   * If true, changes format of itemLayout to circle
   */
  circle?: boolean;
  /**
   * Conveys the status of a program ex. "Live" or "On Now"
   */
  label?: Partial<LabelProps>;
  /**
   * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
   */
  metadataLocation: 'standard' | 'inset';
  /**
   * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
   */
  metadata?: Partial<MetadataProps> | undefined;
  /**
   * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
   */
  persistentMetadata?: boolean;
  /**
   * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
   */
  progressBar: Partial<ProgressBarProps>;
  /**
   * total width of the component
   */
  width: number;
}

export interface TileStyleProps {}

const Tile: Component<TileProps> = (props: TileProps) => {

  return (
    <node
      use:withPadding={styles.Container.padding}
      {...props}
      style={styles.Container}
      animate
      forwardStates
    >
      <img src={props.artwork} style={styles.Container} alt="Solid logo" />

      <Show when={props.badge?.title}>
        <Badge {...props.badge} x={styles.Container.padding[0]} y={styles.Container.padding[1]} />
      </Show>

      <Show when={props.label?.title}>
        <Label
          {...props.label}
          x={(props.width || styles.Container.width) - styles.Container.padding[0]}
          y={styles.Container.padding[1]}
          mountX={1}
        />
      </Show>

      <View
        style={styles.metaContainer}
        x={styles.Container.padding[0]}
        y={(props.height || styles.Container.height) - styles.Container.padding[1]}
      >
        <Show when={props.logo}>
          <img src={props.logo} style={styles.LogoContainer} />
        </Show>

        <Show when={props.metadataLocation == 'inset'}>
          <Show when={props.metadata}>
            <Metadata
              {...props.metadata}
              width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
            />
          </Show>
        </Show>

        <Show when={props.progressBar?.progress ? props.progressBar.progress > 0 : 0}>
          <ProgressBar
            {...props.progressBar}
            width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          />
        </Show>
      </View>

      <Show when={props.metadataLocation == 'standard'}>
        <Show when={props.metadata}>
          <Metadata
            {...props.metadata}
            x={styles.Container.padding[0]}
            y={(props.height || styles.Container.height) + styles.Container.padding[1]}
            width={(props.width || styles.Container.width) - styles.Container.padding[0] * 2}
          />
        </Show>
      </Show>
    </node>
  );
};

export default Tile;
