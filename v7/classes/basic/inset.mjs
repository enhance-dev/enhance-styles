import directions from '../../lib/directions.mjs'

export default function inset({ breakpoint = '' } = {}) {
  let output = `
/*** Inset ***/
.inset-0${breakpoint}{inset:0}
`
  const directionKeys = Object.keys(directions)

  directionKeys.forEach(directionKey => {
    output += `.inset-${directionKey}-0${breakpoint}{inset-${directions[directionKey]}:0;}\n`
  })

  return output
}
