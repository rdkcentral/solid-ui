import { makeComponentStyles } from './getThemeStyles.js';
const fileRegex = /.*\.static-styles\.json/;

export default function solidUiCompiler(themeConfig) {
  return {
    name: 'solid-ui-theme-compiler',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: makeStyles(src, themeConfig),
          map: null
        };
      }
    }
  };
}

// await import('@lightningjs/l3-ui-theme-base');

function makeStyles(src, themeConfig) {
  console.log(themeConfig);
  console.log(src.themeKeys);
  // const styles = JSON.parse(src);
  // console.log(themeKeys, base);
  // const compiledStyles = makeComponentStyles(styleJs);
  return src;
}

function makeImports(src, themeConfig) {
  // TODO use magic-string or recast
  // https://github.com/Rich-Harris/magic-string
  // https://github.com/benjamn/recast
  if (themeConfig.hasOwnProperty('theme')) {
    return makeStaticImport(src, themeConfig.theme);
  } else if (themeConfig.hasOwnProperty('themes')) {
    return makeDynamicImport(src, themeConfig.themes);
  }
}

function makeStaticImport(src, themeConfig) {
  const toReplace = 'import theme from "theme"';
  const replacement = `import theme from "${themeConfig.theme}"`;

  const newSrc = src.replace(toReplace, replacement);

  return newSrc;
}

function makeDynamicImport(src, themes) {
  const toReplace = 'import theme from "theme"';

  let replacement = "const themeName = 'mosaic';";
  replacement += '\nlet theme, importedTheme;';

  replacement += Object.entries(themes)
    .map(([name, location]) => {
      return `if (themeName === '${name}') {
  importedTheme = await import("${location}");
}`;
    })
    .join('\n');

  replacement += '\ntheme = importedTheme.default';

  const newSrc = src.replace(toReplace, replacement);

  return newSrc;
}
