import directions from './directions.mjs'
import { generateSpaceScaleProperties, getScalePropertyNames, defaultConfig } from './scales.mjs'

export default function generateDirectionalVariants({ spaceScale = defaultConfig, template } = {}) {
  let output = ''

  const directionKeys = Object.keys(directions)
  const properties = generateSpaceScaleProperties(spaceScale)
  const propertyNames = getScalePropertyNames(properties)

  propertyNames.forEach(pn => {
    const step = pn.replace('--space-', '')

    // All directions
    output += template({
      label: '',
      step,
      direction: '',
      value: `var(${pn})`
    })

    // Single directions and axes
    directionKeys.forEach(direction => {
      output += template({
        label: direction,
        step,
        direction,
        value: `var(${pn})`
      })
    })
  })

  return output
}
