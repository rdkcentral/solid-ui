const fileRegex = /.*\.(ts|tsx)/;

export default function solidUiThemeSwitcher(themeConfig) {
  // const virtualModuleId = 'virtual:solid-ui-theme-switcher';
  // const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'solid-ui-theme-switcher',
    transform(src, id) {
      if (id.includes('Artwork.styles')) {
        return {
          code: makeImports(src, themeConfig),
          map: null
        };
      }
    }
    // resolveId(id) {
    //   if (id === virtualModuleId) {
    //     return resolvedVirtualModuleId;
    //   }
    // },
    // load(id) {
    //   if (id === resolvedVirtualModuleId) {
    //     return `export const msg = "from virtual module"`;
    //   }
    // }
  };
}

// await import('@lightningjs/l3-ui-theme-base');

function makeStyles(src, themeConfig) {}

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
