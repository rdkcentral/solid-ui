let theme;
const condition = false;

if (condition) {
  // console.log('true');
  const base = await import('@lightningjs/l3-ui-theme-base');
  theme = base.default;
} else {
  // console.log('false');
  const base = await import('@lightningjs/l3-ui-theme-base');
  theme = base.default;
}

// console.log(theme);

export default theme;
