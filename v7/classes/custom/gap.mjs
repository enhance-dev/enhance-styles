import getCustomProperties from '../../lib/getCustomProperties.mjs'
import { generateSpaceScaleProperties } from '../../lib/scales.mjs'

export default function gap(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const sizes = getCustomProperties(generateSpaceScaleProperties(config.spaceScale))

  let output = ''

  if (sizes.length) {
    output += '/*** Gap ***/'
    sizes.forEach(size => {
      output += '\n'
      output += `.gap${size.replace('--space-', '')}${breakpoint} { gap: var(${size}); }`
    })
  }
  return output
}

