module.exports = function Truncate(query='') {
  return /*css*/`
.truncate${query},
.space-nowrap${query}{white-space:nowrap;}
.truncate${query},
.ellipsis{text-overflow:ellipsis;}
  `
}
