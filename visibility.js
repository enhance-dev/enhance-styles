module.exports = function overflow (query='') {
  return /*css*/`
/* VISIBILITY */
.invisible${query}{visibility:hidden;}
.visible${query}{visibility:visible;}
`
}
