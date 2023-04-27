import position from './position.mjs'
import inset from './inset.mjs'
import display from './display.mjs'
import size from './size.mjs'
import flex from './flex.mjs'
import grid from './grid.mjs'
import boxAlign from './box-align.mjs'
import gap from './gap.mjs'
import order from './order.mjs'
import zIndex from './z-index.mjs'

export default function layout(state={}) {
  const { label:query='' } = state
  return /*css*/`
/*** Layout ***/

${position(query)}
${inset(query)}
${display(query)}
${size(query)}
${flex(query)}
${grid(state)}
${boxAlign(query)}
${gap(state)}
${order(query)}
${zIndex(query)}
`
}
