const position = require('./position')
const positioning = require('./positioning')
const display = require('./display')
const width = require('./width')
const height = require('./height')
const flex = require('./flex')
const grid = require('./grid')
const zIndex = require('./z-index')

module.exports = function layout(state={}) {
  let query = state.label
  return /*css*/`
/* -----  LAYOUT ----- */

${position(query)}
${positioning(query)}
${display(query)}
${width(state)}
${height(state)}
${flex(query)}
${grid(state)}
${zIndex(state)}
`
}
