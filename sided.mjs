import sides from './sides.mjs'
import { generateSpaceScaleProperties, getScalePropertyNames } from './lib/scales.mjs'

export default function sided(state={}) {
  const { config = {}, template } = state
  let output = ''

  if (config.spaceScale) {
    const sideKeys = Object.keys(sides)
    const properties = generateSpaceScaleProperties(config.spaceScale)
    const propertyNames = getScalePropertyNames(properties)

    propertyNames.forEach(pn => {
      const step = pn.replace('--space-', '')

      // All sides
      output += template({
        label: '',
        step,
        side: '',
        value: `var(${pn})`
      })

      // Single and double sides
      sideKeys.forEach(sideKey => {
        output += template({
          label: sideKey,
          step,
          side: sides[sideKey],
          value: `var(${pn})`
        })
      })
    })
  }
  return output
}
