import { generateSpaceScaleProperties } from '../lib/scales.mjs'

export default function spaceScaleProperties(state = {}) {
  const { config = {} } = state
  const { spaceScale = null } = config

  let output = ''

  if (spaceScale) {
    output = '/*** Space Scale ***/\n:root {'
    output += generateSpaceScaleProperties(spaceScale)
    output += `\n}`
  }

  return output
}
