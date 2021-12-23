const truncate = require('./truncate')

module.exports = function utils(query='') {
  var output = `
/* UTILS */
`
  output += truncate(query)
  return output
}
