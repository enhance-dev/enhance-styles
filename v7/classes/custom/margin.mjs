import directions from '../../lib/directions.mjs'
import getCustomProperties from '../../lib/getCustomProperties.mjs'
import { generateSpaceScaleProperties } from '../../lib/scales.mjs'

export default function margin(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const directionEntries = Object.entries(directions)
  const sizes = getCustomProperties(generateSpaceScaleProperties(config.spaceScale))

  // Null margins
  let output = '/*** Margin ***/\n'
  output += `.m-none${breakpoint} { margin: 0; }`
  directionEntries.forEach(dir => {
    output += '\n'
    output += `.m${dir[0]}${breakpoint}-none { margin-${dir[1]}: 0; }`
  })

  // Margin scale
  if (sizes.length) {
    sizes.forEach(size => {
      output += '\n'
      output += `.m${size.replace('--space-', '')}${breakpoint} { margin: var(${size}); }}`
      directionEntries.forEach(dir => {
        output += '\n'
        output += `.m${dir[0]}${size.replace('--space-', '')}${breakpoint} { margin-${dir[1]}: var(${size}); }`
      })
    })
  }

  return output
}
