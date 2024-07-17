export default function grid(state = {}) {
  const { config = {}, breakpoint = '' } = state
  const { grid = {} } = config
  const { steps = 6 } = grid

  let output = `/*** Grid ***/
.flow-row${breakpoint} { grid-auto-flow: row; }
.flow-col${breakpoint} { grid-auto-flow: column; }
.flow-row-dense${breakpoint} { grid-auto-flow: row dense; }
.flow-column-dense${breakpoint} { grid-auto-flow: column dense; }
.row-auto${breakpoint} { grid-row: auto; }
.col-auto${breakpoint} { grid-column: auto; }
.col-end-auto${breakpoint} { grid-column-end:  auto; }
.rows-end-auto${breakpoint} { grid-row-end: auto; }
.rows-none${breakpoint} { grid-template-rows: none; }`

  for (let i = 1; i < steps + 1; i++) {
    output += `.col-${i}${breakpoint} { grid-template-columns:repeat(${i}, minmax(0, 1fr)); }\n`
    output += `.col-span-${i}${breakpoint} { grid-column: span ${i} / span ${i}; }\n`
    output += `.col-start-${i}${breakpoint} { grid-column-start: ${i}; }\n`
    output += `.row-start-${i}${breakpoint} { grid-row-start: ${i}; }\n`
    output += `.col-end-${i}${breakpoint} { grid-column-end: ${i}; }\n`
    output += `.row-end-${i}${breakpoint} { grid-row-end: ${i}; }\n`
    output += `.row-${i}${breakpoint} { grid-template-rows: repeat(${i}, minmax(0, 1fr)); }`
  }

  return output
}
