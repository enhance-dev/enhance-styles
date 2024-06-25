import hexToHsl from '../lib/hex-to-hsl.mjs'

function getColorScale(hslBaseColor, name) {
  const hue = hslBaseColor.h
  const saturation = hslBaseColor.s
  const luminance = hslBaseColor.l

  return `  --${name}-100: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 40)}%);
  --${name}-200: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 30)}%);
  --${name}-300: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 20)}%);
  --${name}-400: hsl(${hue}, ${saturation}%, ${Math.floor(luminance + 10)}%);
  --${name}-500: hsl(${hue}, ${saturation}%, ${luminance}%);
  --${name}-600: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 10)}%);
  --${name}-700: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 20)}%);
  --${name}-800: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 30)}%);
  --${name}-900: hsl(${hue}, ${saturation}%, ${Math.floor(luminance - 40)}%);`
}

export default function colorScales(state = {}) {
  const { config = {} } = state
  const { color = {} } = config
  const { scales = { /* DEFAULTS HERE */ } } = color

  let output = ''

  if (Object.keys(scales).length) {
    output = '/*** Color: Scales ***/\n:root {'

    Object.keys(scales).forEach(colorName => {
      output += '\n'
      output += getColorScale(hexToHsl(scales[colorName]), colorName)
    })

    output += '\n}'
  }

  return output
}
