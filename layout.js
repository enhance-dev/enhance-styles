const position = require('./position')
const positioning = require('./positioning')
const display = require('./display')
const width = require('./width')
const height = require('./height')
const flex = require('./flex')
const grid = require('./grid')
const zIndex = require('./z-index')

module.exports = function layout(state={}) {
  const { label:query='' } = state
  return /*css*/`
/* -----  LAYOUT ----- */

${position(query)}
${positioning(query)}
${display(query)}
${width(query)}
${height(query)}
${flex(query)}
${grid(state)}
${zIndex(query)}
`
}
