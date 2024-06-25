import { generateSpaceScaleProperties, getScalePropertyNames, defaultConfig } from '../../lib/scales.mjs'

export default function gap({ breakpoint = '', spaceScale = defaultConfig } = {}) {
  let output = `
/*** Gap ***/
`
  const properties = generateSpaceScaleProperties(spaceScale)
  const propertyNames = getScalePropertyNames(properties)

  propertyNames.forEach(pn => {
    const step = pn.replace('--space-', '')
    output += `.gap${step}${breakpoint}{gap:var(${pn});}\n`
  })

  return output
}

