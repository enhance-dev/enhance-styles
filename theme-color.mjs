import hextohsl from './hex-to-hsl.mjs'

export default function themeColor({ config }) {
  const { color={}, theme={} } = config
  theme['grey'] = theme && theme.grey || '#777'

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
if (name === 'light' || name === 'dark') {
  return `  --${name}: ${theme[name]};`
}

else {
  return colorSteps(hextohsl(theme[name]), name)
}
}).join('\n')}
${Object.keys(color).map(name => `  --${name}: ${color[name]};`).join('\n')}
}
`

}
