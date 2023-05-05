import { generateTypeScaleProperties, getScalePropertyNames } from './lib/scales.mjs'

export default function fontSize(state = {}) {
  const { config = {}, label: query = ''} = state

  let output = ''
  
  if (config.typeScale) {
    output = /*css*/`
/*** Font Sizes ***/
`

    const properties = generateTypeScaleProperties(config)
    const propertyNames = getScalePropertyNames(properties)

    propertyNames.forEach(pn => {
      const step = pn.replace('--text-', '')
      output += `.text${step}${query}{font-size:var(${pn});}\n`
    })
  }

  return output
}
