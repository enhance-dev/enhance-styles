import position from './position.mjs'
import positioning from './positioning.mjs'
import display from './display.mjs'
import width from './width.mjs'
import height from './height.mjs'
import flex from './flex.mjs'
import grid from './grid.mjs'
import zIndex from './z-index.mjs'

export default function layout(state={}) {
  const { label:query='' } = state
  return /*css*/`
/* -----  LAYOUT ----- */

${position(query)}
${positioning(query)}
${display(query)}
${width(query)}
${height(query)}
${flex(query)}
${grid(state)}
${zIndex(query)}
`
}
