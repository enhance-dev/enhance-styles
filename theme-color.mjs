import hextohsl from './hex-to-hsl.mjs'

export default function themeColor ({ config }) {
  const { color = {}, theme = {} } = config
  const defaultAccent = '#0075db'
  const defaultError = '#d60606'
  const defaultLight = '#fefefe'
  const defaultDark = '#222222'
  const light = color.light || theme.back || defaultLight
  const dark = color.dark || theme.fore || defaultDark
  const lightParts = hextohsl(light)
  const darkTheme = theme?.dark || {}
  const lightAccent = theme?.accent || defaultAccent
  const lightError = theme?.error || defaultError
  const accentParts = hextohsl(lightAccent)
  const errorParts = hextohsl(lightError)
  const darkThemeColors = Object.keys(darkTheme).map(name => {
    return `--${name}: ${darkTheme[name]};`
  }).join('\n')
  const themeColors = Object.keys(theme).map(name => {
    if (name === 'accent' ||
        name === 'error' ||
        name === 'back' ||
        name === 'fore' ||
       (name === 'dark' && typeof theme[name] === 'object')) {
      return
    }
    else {
      return colorSteps(hextohsl(theme[name]), name)
    }
  }).join('\n')
  const colors = Object.keys(color).map(name => `  --${name}: ${color[name]};`).join('\n')
  const grayScale = colorSteps({ h: lightParts.h, s: 0, l: 50 }, 'gray')

  function colorSteps (color, name) {
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
  --accent-h: ${accentParts.h};
  --accent-s: ${accentParts.s}%;
  --accent-l: ${accentParts.l}%;
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --light: ${light};
  --dark: ${dark};
  --fore: var(--dark, currentColor);
  --back: var(--light);
  --error-h: ${errorParts.h};
  --error-s: ${errorParts.s}%;
  --error-l: ${errorParts.l}%;
  --error: hsl(var(--error-h), var(--error-s), var(--error-l));
${themeColors}
${colors}
${grayScale}
  --focus-l: 30%;
  accent-color: var(--accent, royalblue);
  color-scheme: light dark;
}

:is(a, button, input, textarea, summary):focus:not(:focus-visible) {
  outline: none;
}

:is(a, button, input, textarea, summary):focus-visible {
  outline: max(var(--focus-size, 1px), 1px) solid var(--accent, royalblue);
  outline-offset: var(--focus-offset, 0);
  box-shadow: 0 0 0 max(var(--focus-size, 3px), 3px) hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + var(--focus-l)))
  ;
}

:is(a, button, input, textarea, summary):not(:focus):not(:placeholder-shown):invalid {
  outline: max(var(--focus-size, 1px), 1px) solid var(--error, crimson);
  outline-offset: var(--focus-offset, 0);
  box-shadow: 0 0 0 3px hsl(var(--error-h), var(--error-s), calc(var(--error-l) + var(--focus-l)));
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent-l: 62%;
    --error-l: 62%;
    --focus-l: -30%;
    --fore: var(--light);
    --back: var(--dark);
    ${darkThemeColors}
  }
}
`

}
