const Scale = require('./scale')
const sds = require('./sides')

module.exports = function sided(state={}) {
  const { config, template } = state
  const scale = Scale(config)
  const l = scale.length
  const half = Math.floor(l * 0.5)
  const sides = Object.keys(sds)
  let step = half
  let output = ''
  let value
  let side
  for (let i=0; i < l; i++) {
    let s = step--
    value = scale[i]
    output += template('', s, '', value)
    output += sides && sides.map(
      label => {
        side = sds[label]
        return template(label, s, side, value)
      }
    ).join('')
  }
  return output
}
