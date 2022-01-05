module.exports = function properties(state={}) {
  const { config } = state
  const { properties={} } = config
  let output = /*css*/`
/* CUSTOM PROPERTIES */
:root {
`
  properties.forEach(function (prop={}) {
    let key = Object.keys(prop)[0]
    output += `  --${key}:${prop[key]};/* ${key} */\n`
  })

  output += `
}
`
  return output
}
