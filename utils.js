const truncate = require('./truncate')

module.exports = function utils() {
  var output = `
/* UTILS */
`
  output += truncate
  return output
}
