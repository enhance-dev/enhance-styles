import truncate from './truncate.mjs'

export default function utils(query='') {
  var output = `
/* UTILS */
`
  output += truncate(query)
  return output
}
