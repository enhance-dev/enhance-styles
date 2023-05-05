import sides from './sides.mjs'

export default function inset (query='') {
  let output = `
/*** Inset ***/
.inset-0${query}{inset:0}
`
  const sideKeys = Object.keys(sides)

  sideKeys.forEach(sideKey => {
    output += `.inset-${sideKey}-0${query}{inset-${sides[sideKey]}:0;}\n`
  })

  return output
}
