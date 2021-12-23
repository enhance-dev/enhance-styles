const modularScale = require('modular-scale')
const PERFECT_FOURTH = modularScale.ratios.perfectFourth

module.exports = function scale(config={}) {
  const {
    base=16,
    scale={}
  } = config
  const { ratio=PERFECT_FOURTH, steps=8 } = scale
  const ms = modularScale({
    ratio,
    base
  })
  return ms.steps(steps)
}
