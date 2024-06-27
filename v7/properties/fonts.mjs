export default function fonts(state = {}) {
  const { config = {} } = state
  const { fonts = { /* DEFAULTS HERE */ } } = config

  let output = ''

  if (Object.keys(fonts).length) {
    output = '/*** Fonts ***/\n:root {'

    Object.keys(fonts).forEach(font => {
      output += '\n'
      output += `  --font-${font}: ${fonts[font]};`
    })

    output += '\n}'
  }

  return output
}

