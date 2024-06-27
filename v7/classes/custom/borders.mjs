import borderRadius from '../../properties/border-radius.mjs'
import borderWidths from '../../properties/border-widths.mjs'
import directions from '../../lib/directions.mjs'
import getCustomProperties from '../../lib/getCustomProperties.mjs'

export default function borders(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const radiusProperties = getCustomProperties(borderRadius({ config }))
  const widthProperties = getCustomProperties(borderWidths({ config }))
  const directionEntries = Object.entries(directions)

  let output = '/*** Borders ***/'

  // Border styles
  const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']
  borderStyles.forEach(style => {
    output += '\n'
    output += `.border-${style} { border-style: ${style}; }`
  })
  directionEntries.forEach(dir => {
    borderStyles.forEach(style => {
      output += '\n'
      output += `.border-${dir[0]}-${style} { border-${dir[1]}-style: ${style}; }`
    })
  })

  // Border widths scale
  if (widthProperties.length) {
    widthProperties.forEach((w, i) => {
      output += '\n'
      output += `.border${i} { border-width: var(${w}); }`

      directionEntries.forEach(dir => {
        output += '\n'
        output += `.border-${dir[0]}${i} { border-${dir[1]}-width: var(${w}); }`
      })
    })
  }

  // Radius builtins
  output += `
.radius-100${breakpoint} { border-radius: 100%; }
.radius-pill${breakpoint} { border-radius: 9999px; }
.radius-none${breakpoint} { border-radius: 0; }`

  // Directional null radii 
  directionEntries.forEach(dir => {
    output += '\n'
    output += `.radius-${dir[0]}-none${breakpoint} { border-${dir[1]}-radius: 0; }`
  })

  // Radii scale
  if (radiusProperties.length) {
    radiusProperties.forEach((r, i) => {
      output += '\n'
      output += `.radius${i} { border-radius: var(${r}); }`

      directionEntries.forEach(dir => {
        output += '\n'
        output += `.radius-${dir[0]}${i} { border-${dir[1]}-radius: var(${r}); }`
      })
    })
  }

  return output
}
