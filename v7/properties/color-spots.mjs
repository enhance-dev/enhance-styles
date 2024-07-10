export default function colorSpots(state = {}) {
  const { config = {} } = state
  const { color = {} } = config
  const { spots = {
    magenta: '#ff0095',
    p3magenta: 'color(display-p3 1 0 0.58)',
  } } = color

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
