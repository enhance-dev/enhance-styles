import hextohsl from './hex-to-hsl.mjs'

export default function themeColor({ config }) {
  const { color={}, theme={} } = config
  const defaultLight = '#f8f9fa'
  const defaultDark = '#343a40'
  const lightParts = hextohsl(theme['light'] || defaultLight);
  const defaultAccent = '#007aff'
  const defaultAccentContrast = defaultDark
  theme['accent'] = theme['accent'] || defaultAccent
  theme['accent-contrast'] = theme['accent-contrast'] || defaultAccentContrast


  function colorSteps(color, name) {
    const hue = color.h
    const saturation = color.s
    const luminance = color.l

    return `
  --${name}-100: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 40)}%);
  --${name}-200: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 30)}%);
  --${name}-300: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 20)}%);
  --${name}-400: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 10)}%);
  --${name}-500: hsl(${hue}, ${saturation}%, ${luminance}%);
  --${name}-600: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 10)}%);
  --${name}-700: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 20)}%);
  --${name}-800: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 30)}%);
  --${name}-900: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 40)}%);
    `
  }


  return /*css*/`
/*** Theme Colors ***/
:root {
${Object.keys(theme).map(name => {
  if (name === 'light' ||
      name === 'dark' ||
      name === 'accent' ||
      name === 'accent-contrast') {
  return `  --${name}: ${theme[name]};`
}
else {
  return colorSteps(hextohsl(theme[name]), name)
}
}).join('\n')}

${Object.keys(color).map(name => `  --${name}: ${color[name]};`).join('\n')}
  --back: var(--light, ${defaultLight});
  --fore: var(--dark, ${defaultDark});
  ${colorSteps({ h: lightParts.h, s: 0, l: 50}, 'grey')}
  --focus-size: 1px;
  --focus-offset: 1px;
  accent-color: var(--accent);
  color-scheme: light dark;
}

:is(a, button, input, textarea, summary):focus:not(:focus-visible) {
  outline: none;
}

:is(a, button, input, textarea, summary):focus-visible {
  outline: max(var(--focus-size), 1px) solid var(--accent);
  outline-offset: var(--focus-offset);
}

:is(a, button, input, textarea, summary):not(:focus):not(:placeholder-shown):invalid {
  outline: max(var(--focus-size), 1px) solid var(--error);
  outline-offset: var(--focus-offset);
}

:is(a, button, input, textarea, summary):not(:focus):not(:placeholder-shown):invalid {
  outline: max(var(--focus-size), 1px) solid var(--error);
  outline-offset: var(--focus-offset);
}

@media (prefers-color-scheme: dark) {
  :root {
    --back: var(--dark, ${defaultDark});
    --fore: var(--light, ${defaultLight});
  }
}
`

}
