module.exports = function dimensions (query='') {
  return /*css*/`
/* DIMENSIONS */
.w-auto${query}{width:auto;}
.h-auto${query}{height:auto;}
.w-100${query}{width:100%;}
.h-100${query}{height:100%;}
.vw-100${query}{width:100vw;}
.vh-100${query}{height:100vh;}
`
}
