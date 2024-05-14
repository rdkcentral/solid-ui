import Blits from '@lightningjs/blits';
import styles from './Badge.styles';
import { Tone } from '../../types/types';
import { isType, isValidTone } from '../../utils';
import Icon from '../Icon/Icon';

const IconAlignments = ['none', 'left', 'right'] as const;
type IconAlign = (typeof IconAlignments)[number];

// [top, right, bottom, left]
type Padding = [number, number, number, number];

export type BadgeProps = {
  title: string;
  tone?: Tone;
  iconAlign?: IconAlign;
  iconColor?: string;
  iconSrc?: string;
};

type BadgeState = {
  padding: Padding;
  font: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  gap: number;
};

const Badge = Blits.Component('Badge', {
  components: {
    Icon
  },
  props: [
    {
      key: 'title',
      required: false,
      cast: (v?: string): string | undefined => v
    },
    {
      key: 'iconSrc',
      required: false,
      cast: (v?: string): string | undefined => v
    },
    {
      key: 'iconColor',
      required: false,
      cast: (v?: string): string | undefined => v
    },
    {
      key: 'iconAlign',
      default: 'left',
      required: false,
      cast: (v: unknown): IconAlign | undefined => {
        if (v === undefined || isType<IconAlign>(v, IconAlignments)) return v;
        throw new Error(`Invalid icon alignment '${v}'`);
      }
    },
    {
      key: 'tone',
      default: 'neutral',
      required: false,
      cast: (v: string): Tone => {
        if (isValidTone(v)) return v;
        throw new Error(`Invalid tone '${v}'`);
      }
    }
  ],
  // iconSrc defaulted with empty string to prevent blits warning for required field - would be better to conditionally render the icon if possible
  template: `
    <Element
      :w="$containerSize.w"
      :h="$containerSize.h"
      :color="$containerColor"
      :effects="[$shader('radius', {radius: $border.radius}), $shader('border', {width: $border.width, color: $border.color})]"
    >
      <Icon
        :x="$iconLeft"
        :y="$padding[0]"
        :width="$icon.width"
        :height="$icon.height"
        :show="$icon.show"
        :iconSrc="$icon.src ?? ''"
        :iconColor="$icon.color"
      />
      <Text
        :x="$textLeft"
        :y="$padding[0]"
        :content="$title"
        :lineheight="$lineHeight"
        :size="$fontSize"
        :font="$font"
        :color="$textColor"
      />
    </Element>
  `,
  state(): BadgeState {
    return {
      padding: styles.Container.base.padding,
      font: styles.Text.base.fontFamily,
      fontSize: styles.Text.base.fontSize,
      fontWeight: styles.Text.base.fontWeight,
      lineHeight: styles.Text.base.lineHeight,
      gap: styles.Container.base.gap
    };
  },
  computed: {
    iconLeft(): number {
      return (
        this.padding[3] +
        (this.icon.show && this.iconAlign === 'right' && this.textWidth && this.textWidth + this.gap)
      );
    },
    textLeft(): number {
      return this.padding[3] + (this.icon.show && this.iconAlign !== 'right' && this.icon.width + this.gap);
    },
    textWidth(): number {
      // calculate width of text using dummy canvas element - hopefully blits will get flex soon so we dont need to do this
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx!.font = `${this.fontSize}px ${this.font}`;
      const text = ctx!.measureText(this.title);
      canvas.remove();

      return text.width;
    },
    containerSize(): { w: number; h: number } {
      return {
        w:
          this.textWidth +
          this.padding[1] +
          this.padding[3] +
          (this.icon.show && this.icon.width + (this.textWidth && this.gap)),
        h: this.lineHeight + this.padding[0] + this.padding[2]
      };
    },
    containerColor(): string {
      return styles.Container.tones[this.tone as Tone].color;
    },
    border(): { radius: number; color: string; width: number } {
      return {
        radius: styles.Container.base.borderRadius,
        color: styles.Container.tones[this.tone as Tone].border.color,
        width: styles.Container.tones[this.tone as Tone].border.width
      };
    },
    icon(): { show: boolean; color: string; src: string; width: number; height: number } {
      return {
        show: !!this.iconSrc,
        color: this.iconColor ?? styles.Icon.tones[this.tone as Tone].color,
        src: this.iconSrc,
        width: this.lineHeight,
        height: this.lineHeight
      };
    },
    textColor(): string {
      return styles.Text.tones[this.tone as Tone].color;
    }
  }
});

export { Badge as default };