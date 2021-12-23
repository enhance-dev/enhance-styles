const Scale = require('./scale')
const rems = require('./rems')

module.exports = function sizes(state={}) {
  const { config={}, query='' } = state
  const scale = Scale(config)
  let output = /*css*/`
/* SIZES */
`
  const l = scale.length
  const half = Math.floor(l * 0.5)
  let step = half
  let value
  for (let i=0; i < l; i++) {
    let s = step--
    value = scale[i]
    output += `.text${s}${query}{font-size:${rems({config, value})};}/* ${value}px */ \n`
  }
  return output
}
