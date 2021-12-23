const rems = require('./rems')

module.exports = function width(state={}) {
  const { config={}, query='' } = state
  return /*css*/`
/* WIDTH */
.w-0${query}{width:0}
.w-full${query}{width:100%}
.w-screen${query}{width:100vw}
.min-w-0${query}{min-width:0}
.min-w-full${query}{min-width:100%}
.max-width-none${query}{max-width:none}
.max-w-full${query}{max-width:100%}
`
}