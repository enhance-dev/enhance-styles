import { generateTypeScaleProperties, getScalePropertyNames } from './lib/scales.mjs'

export default function fontSize(state = {}) {
  const { config = {}, label: query = ''} = state
  const { typeScale } = config

  let output = ''
  
  if (typeScale) {
    output = /*css*/`
/*** Font Sizes ***/
`

    const properties = generateTypeScaleProperties(typeScale)
    const propertyNames = getScalePropertyNames(properties)

    propertyNames.forEach(pn => {
      const step = pn.replace('--text-', '')
      output += `.text${step}${query}{font-size:var(${pn});}\n`
    })
  }

  return output
}
