const reset = require('./reset')
const typeface = require('./typeface')
const variables = require('./variables')
const background = require('./background')
const border = require('./border')
const fill = require('./fill')
const stroke = require('./stroke')

module.exports = function theme(config) {

  return /*css*/`
/* ----- THEME ----- */
${variables({config})}
${reset()}
${typeface({config})}
${background({config})}
${border({config})}
${fill({config})}
${stroke({config})}
`
}
