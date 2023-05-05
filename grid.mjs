import rems from './rems.mjs'

export default function grid(state={}) {
  const config = state.config || {}
  const grid = config.grid || {}
  const gridSteps = grid.steps || 12
  const gridHeights = grid.heights || []
  const query = state.label || ''
  let output = /*css*/`
/*** Grid ***/
.flow-row${query}{grid-auto-flow:row;}
.flow-col${query}{grid-auto-flow:column;}
.flow-row-dense${query}{grid-auto-flow:row dense;}
.flow-column-dense${query}{grid-auto-flow:column dense;}
.row-auto${query}{grid-row:auto;}
.col-auto${query}{grid-column:auto;}
.col-end-auto${query}{grid-column-end: auto;}
.rows-end-auto${query}{grid-row-end:auto;}
.rows-none${query}{grid-template-rows:none;}
`

  for (let i=1; i<gridSteps+1; i++) {
    output += `.col-${i}${query}{grid-template-columns:repeat(${i}, minmax(0, 1fr));}\n`
    output += `.col-span-${i}${query}{grid-column: span ${i} / span ${i};}\n`
    output += `.col-start-${i}${query}{grid-column-start: ${i};}\n`
    output += `.row-start-${i}${query}{grid-row-start: ${i};}\n`
    output += `.col-end-${i}${query}{grid-column-end: ${i};}\n`
    output += `.row-end-${i}${query}{grid-row-end: ${i};}\n`
    output += `.row-${i}${query}{grid-template-rows: repeat(${i}, minmax(0, 1fr));}\n`
  }

  const gHL = gridHeights.length || 0
  for (let i=0; i<gHL; i++) {
    let value = gridHeights[i]
    output += `.row-auto-${value}${query}{grid-auto-rows:minmax(${rems({config, value})}, auto);}\n`
  }

  return output
}
