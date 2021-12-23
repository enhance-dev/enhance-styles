module.exports = function position(query='') {
  return /*css*/`
/* POSITION */
.sticky${query}{position:sticky;}
.static${query}{position:static;}
.absolute${query}{position:absolute;}
.relative${query}{position:relative;}
.fixed${query}{position:fixed;}
`
}
