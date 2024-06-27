import directions from '../../lib/directions.mjs'
import getCustomProperties from '../../lib/getCustomProperties.mjs'
import { generateSpaceScaleProperties } from '../../lib/scales.mjs'

export default function padding(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const directionEntries = Object.entries(directions)
  const sizes = getCustomProperties(generateSpaceScaleProperties(config.spaceScale))

  // Null padding
  let output = '/*** Padding ***/\n'
  output += `.p-none${breakpoint} { padding: 0; }`
  directionEntries.forEach(dir => {
    output += '\n'
    output += `.p${dir[0]}${breakpoint}-none { padding-${dir[1]}: 0; }`
  })

  // Padding scale
  if (sizes.length) {
    sizes.forEach(size => {
      output += '\n'
      output += `.p${size.replace('--space-', '')}${breakpoint} { padding: var(${size}); }}`
      directionEntries.forEach(dir => {
        output += '\n'
        output += `.p${dir[0]}${size.replace('--space-', '')}${breakpoint} { padding-${dir[1]}: var(${size}); }`
      })
    })
  }

  return output
}

