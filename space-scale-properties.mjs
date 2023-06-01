import { generateSpaceScaleProperties } from './lib/scales.mjs'

export default function spaceScaleProperties({ config }) {
  const { spaceScale } = config
  let output = ''

  if (spaceScale) {
    output = /*css*/`
/*** Space Scale ***/
:root {
`
    output += generateSpaceScaleProperties(spaceScale)
    output += `
}
  `
  }

  return output
}
