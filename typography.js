const sizes = require('./sizes')
const style = require('./style')
const lineHeight = require('./line-height')
const weights = require('./weights')
const align = require('./align')
const decoration = require('./decoration')
const tracking = require('./tracking')
const family = require('./family')
const list = require('./list')
const whitespace = require('./white-space')
const wordbreak = require('./word-break')
const transform = require('./transform')

module.exports = function typography(state={}) {
  const { label:query='' } = state
  return `
${family(query)}
${sizes(state)}
${style(query)}
${lineHeight(query)}
${tracking(query)}
${weights(query)}
${transform(query)}
${align(query)}
${decoration(query)}
${list(query)}
${whitespace(query)}
${wordbreak(query)}
  `
}
