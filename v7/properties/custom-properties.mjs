export default function customProperties(state = {}) {
  const { config = {} } = state
  const { customProperties = {} } = config

  let output = ''

  if (Object.keys(customProperties).length) {
    output = '/*** Custom Properties ***/\n:root { '

    Object.keys(customProperties).forEach(name => {
      output += '\n'
      output += `  --${name}: ${customProperties[name]};`
    })

    output += '\n}'
  }

  return output
}
