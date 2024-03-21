import hextohsl from './hex-to-hsl.mjs'

export default function themeColor({ config }) {
  const { color = {}, theme = {} } = config

  if (color === false && theme === false) {
    return ''
  }

  const defaultAccent = '#0075db'
  const defaultError = '#d60606'
  const defaultLight = '#fefefe'
  const defaultDark = '#222222'

  const light = color.light || theme.back || defaultLight
  const dark = color.dark || theme.fore || defaultDark
  const lightParts = hextohsl(light)
  const darkTheme = theme?.dark || {}

  const lightAccent = theme?.accent || defaultAccent
  const lightAccentParts = hextohsl(lightAccent)
  const darkAccent = theme?.dark?.accent || theme?.accent || defaultAccent
  const darkAccentParts = hextohsl(darkAccent)

  // If no custom dark accent colour provided, modify default accent's lightness for dark mode
  if (darkAccent === lightAccent || darkAccent === defaultAccent) {
    darkAccentParts.l = 62
  }

  const lightError = theme?.error || defaultError
  const lightErrorParts = hextohsl(lightError)
  const darkError = theme?.dark?.error || theme?.error || defaultError
  const darkErrorParts = hextohsl(darkError)

  // If no custom dark error colour provided, modify default error's lightness for dark mode
  if (darkError === lightError || darkError === defaultError) {
    darkErrorParts.l = 62
  }

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
  const colors = Object.keys(color).length ? Object.keys(color).map(name => `--${name}: ${color[name]};`).join('\n  ') : null
  const grayScale = colorSteps({ h: lightParts.h, s: 0, l: 50 }, 'gray')

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
  --${name}-900: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 40)}%);`
  }

  const themeStyles = `
/*** Theme Colors ***/
:root {
  --accent-h: ${lightAccentParts.h};
  --accent-s: ${lightAccentParts.s}%;
  --accent-l: ${lightAccentParts.l}%;
  --accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --light: ${light};
  --dark: ${dark};
  --fore: var(--dark, currentColor);
  --back: var(--light);
  --error-h: ${lightErrorParts.h};
  --error-s: ${lightErrorParts.s}%;
  --error-l: ${lightErrorParts.l}%;
  --error: hsl(var(--error-h), var(--error-s), var(--error-l));
${themeColors}
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
    --accent-h: ${darkAccentParts.h};
    --accent-s: ${darkAccentParts.s}%;
    --accent-l: ${darkAccentParts.l}%;
    --error-h: ${darkErrorParts.h};
    --error-s: ${darkErrorParts.s}%;
    --error-l: ${darkErrorParts.l}%;
    --focus-l: -30%;
    --fore: var(--light);
    --back: var(--dark);
    ${darkThemeColors}
  }
}
`.replace(/^\s*\n/gm, '') // remove empty newlines

  const colorStyles = `
/*** Spot Colors ***/
:root {
  ${colors}
}
`

  let result = ``
  if (theme !== false) result += themeStyles
  if (color !== false) result += colorStyles

  return result
}

