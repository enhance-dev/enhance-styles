import { generateSpaceScaleProperties } from './lib/scales.mjs'

export default function spaceScaleProperties({ config }) {
  const { spaceScale } = config
  let output = ''
  
  if (spaceScale) {
    output = /*css*/`
/*** Space Scale ***/
`
    output += generateSpaceScaleProperties(spaceScale)
  }

  return output
}
