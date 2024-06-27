import getCustomProperties from '../../lib/getCustomProperties.mjs'
import { generateTypeScaleProperties } from '../../lib/scales.mjs'

export default function fontSize(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const sizes = getCustomProperties(generateTypeScaleProperties(config.typeScale))

  let output = ''

  if (sizes.length) {
    output += '/*** Font Size ***/'
    sizes.forEach(size => {
      output += '\n'
      output += `${size.replace('--text-', '.text')}${breakpoint} { font-size: var(${size}); }`
    })
  }

  return output
}
