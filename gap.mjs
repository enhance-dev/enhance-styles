import Scale from './scale.mjs'
import rems from './rems.mjs'

export default function grid(state={}) {
  const config = state.config || {}
  const query = state.label || ''
  const scale = Scale(config)
  const l = scale.length
  const half = Math.floor(l * 0.5)
  let step = half
  let output = '/*** Gap ***/\n'
  for (let i=0; i<scale.length; i++) {
    let s = step--
    let value = scale[i]
    output += `.gap${s}${query}{gap:${rems({config, value})};}\n`
  }
  return output
}
