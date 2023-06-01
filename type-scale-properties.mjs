import { generateTypeScaleProperties } from './lib/scales.mjs'

export default function typeScaleProperties({ config }) {
  const { typeScale } = config
  let output = ''

  if (typeScale) {
    output = /*css*/`
/*** Type Scale ***/
:root {
`
    output += generateTypeScaleProperties(typeScale)
    output += `
}
  `
  }

  return output
}
