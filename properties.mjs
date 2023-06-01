export default function properties(state={}) {
  const { config } = state
  const { properties={} } = config
  let output = ''
  if (Object.keys(properties).length) {
    output = /*css*/`
/*** Custom Properties ***/
:root {
  `
 output +=  Object.keys(properties).map(key => `--${key}:${properties[key]};/* ${key} */`).join('\n')

output += `
}
  `
  }

  return output
}
