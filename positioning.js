module.exports = function positioning(query='') {
  return /*css*/`
 /* POSITIONING */
 .trbl${query},
.top0${query}{top:0;}
 .trbl${query},
.right0${query}{right:0;}
 .trbl${query},
.bottom0${query}{bottom:0;}
 .trbl${query},
.left0${query}{left:0;}
  `
}
