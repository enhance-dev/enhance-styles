export default function borderRadius(state = {}) {
  const { config = {} } = state
  const { borders = {} } = config
  const { radii = [2, 8, 16, 9999] } = borders

  let output = ''

  if (radii.length) {
    output = '/*** Borders: Radii ***/\n:root {'

    radii.forEach((r, i) => {
      output += '\n'
      output += `  --borderRadius-${i}: ${typeof r === 'number' ? r += 'px' : r};`
    })

    output += '\n}'
  }

  return output
}

