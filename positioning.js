module.exports = function positioning(query='') {
  return /*css*/`
 /* POSITIONING */
 .trbl,
.top0${query}{top:0;}
 .trbl,
.right0${query}{right:0;}
 .trbl,
.bottom0${query}{bottom:0;}
 .trbl,
.left0${query}{left:0;}
  `
}
