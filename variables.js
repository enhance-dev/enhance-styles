module.exports = function variables (state={}) {
  const { config } = state
  const clrs = config.colors
  const sections = Object.keys(clrs)
  let output = /*css*/`
/* VARIABLES */
:root {
  `
  var colors
  sections.forEach(function (section) {
    colors = clrs[section]
    colors && colors.map(function (color, i) {
      output += `  --${section}${i}:${color.value};/* ${color.label} */\n`
    })
  })

  output += `
}
`
  return output
}
