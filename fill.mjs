export default function fill (state={}) {
  const { query='' } = state
  return /*css*/`
/*** Fill ***/
.fill-none${query}{fill:none}
.fill-current${query}{fill:currentColor}
`
}
