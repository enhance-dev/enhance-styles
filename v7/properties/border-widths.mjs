export default function borderRadius(state = {}) {
  const { config = {} } = state
  const { borders = {} } = config
  const { widths = [1, 2, 4] } = borders

  let output = ''

  if (widths.length) {
    output = '/*** Borders: Widths ***/\n:root {'

    widths.forEach((w, i) => {
      output += '\n'
      output += `  --borderWidth-${i}: ${typeof w === 'number' ? w += 'px' : w};`
    })

    output += '\n}'
  }

  return output
}

