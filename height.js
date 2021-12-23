const rems = require('./rems')

module.exports = function height(state={}) {
  const query = state.label
  return /*css*/`
/* HEIGHT */
.h-0${query}{height:0;}
.h-full${query}{height:100%;}
.h-screen${query}{height:100vh;}
.min-h-0${query}{min-height:0;}
.min-h-full${query}{min-height:100%;}
.min-h-screen${query}{min-height:100vh;}
.max-h-full${query}{max-height:100%;}
.max-h-screen${query}{max-height:100vh;}
`
}
