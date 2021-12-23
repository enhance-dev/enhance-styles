module.exports = function media (size, content) {
  return /*css*/`
@media only screen and (min-width:${size}) {
  ${content}
}
`
}
