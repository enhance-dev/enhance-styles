module.exports = function fill (state={}) {
  const { query='' } = state
  return /*css*/`
/* FILL */
.fill-none${query}{fill:none}
.fill-current${query}{fill:currentColor}
`
}
