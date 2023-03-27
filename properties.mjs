export default function properties(state={}) {
  const { config } = state
  const { properties={} } = config
  let output = ''
  if (Object.keys(properties)) {
    output = /*css*/`
/* CUSTOM PROPERTIES */
  `
 output +=  Object.keys(properties).map(key => `--${key}:${properties[key]};/* ${key} */`).join('\n')

output += `
  `
  }

  return output
}
