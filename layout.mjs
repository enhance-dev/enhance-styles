import position from './position.mjs'
import positioning from './positioning.mjs'
import display from './display.mjs'
import size from './size.mjs'
import flex from './flex.mjs'
import grid from './grid.mjs'
import zIndex from './z-index.mjs'

export default function layout(state={}) {
  const { label:query='' } = state
  return /*css*/`
/* LAYOUT */

${position(query)}
${positioning(query)}
${display(query)}
${size(query)}
${flex(query)}
${grid(state)}
${zIndex(query)}
`
}
