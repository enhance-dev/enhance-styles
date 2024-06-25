export default function colorSpots(state = {}) {
  const { config = {} } = state
  const { color = {} } = config
  const { spots = { /* DEFAULTS HERE */ } } = color

  let output = ''

  if (Object.keys(spots).length) {
    output = '/*** Color: Spot Colors ***/\n:root {'

    Object.keys(spots).forEach(colorName => {
      output += '\n'
      output += `  --${colorName}: ${spots[colorName]};`
    })

    output += '\n}'
  }

  return output
}
