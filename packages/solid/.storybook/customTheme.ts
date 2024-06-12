import { create, themes } from '@storybook/theming/create';
import brand from '../assets/images/lightningjs-icon.png';

export default create({
  ...themes.dark,
  base: 'dark',
  brandTitle: `Lightning SolidJS UI Components`,
  brandUrl: 'https://github.com/lightning-js/ui-components',
  brandImage: brand
});
