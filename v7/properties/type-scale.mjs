import { generateTypeScaleProperties } from '../lib/scales.mjs'

export default function typeScaleProperties(state = {}) {
  const { config = {} } = state
  const { typeScale = null } = config

  let output = ''

  if (typeScale) {
    output = '/*** Type Scale ***/\n:root {'
    output += generateTypeScaleProperties(typeScale)
    output += '\n}'
  }

  return output
}
