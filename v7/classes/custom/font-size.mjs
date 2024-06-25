import { generateTypeScaleProperties, getScalePropertyNames, defaultConfig } from '../../lib/scales.mjs'

export default function fontSize({ breakpoint = '', typeScale = defaultConfig } = {}) {
  let output = `
/*** Font Sizes ***/
`

  const properties = generateTypeScaleProperties(typeScale)
  const propertyNames = getScalePropertyNames(properties)

  propertyNames.forEach(pn => {
    const step = pn.replace('--text-', '')
    output += `.text${step}${breakpoint}{font-size:var(${pn});}\n`
  })

  return output
}
