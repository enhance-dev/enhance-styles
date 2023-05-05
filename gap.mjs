import { generateSpaceScaleProperties, getScalePropertyNames } from './lib/scales.mjs'

export default function gap(state={}) {
  const { config = {}, label: query = '' } = state
  let output = ''

  if (config.spaceScale) {
    output = `
/*** Gap ***/
`
    const properties = generateSpaceScaleProperties(config.spaceScale)
    const propertyNames = getScalePropertyNames(properties)

    propertyNames.forEach(pn => {
      const step = pn.replace('--space-', '')
      output += `.gap${step}${query}{gap:var(${pn});}\n`
    })
  }

  return output
}

