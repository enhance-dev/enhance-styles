module.exports = function color(state={}) {
  const { query='' } = state
  return /*css*/`
/* COLOR */
.text-current${query}{color:currentColor}/* current color */
.text-transparent${query}{color:transparent}/* transparent */
`
}
