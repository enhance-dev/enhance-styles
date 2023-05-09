import { generateTypeScaleProperties } from './lib/scales.mjs'

export default function typeScaleProperties({ config }) {
  const { typeScale } = config
  let output = ''
  
  if (typeScale) {
    output = /*css*/`
/*** Type Scale ***/
`
    output += generateTypeScaleProperties(typeScale)
  }

  return output
}
