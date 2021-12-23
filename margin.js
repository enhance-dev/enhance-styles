const sided = require('./sided')
const rems = require('./rems')

module.exports = function margin (state={}) {
  const { config, label:query } = state
  var output = /*css*/`
/* MARGIN */
.m-none${query}{margin:0}
.my-none${query},
.mt-none${query}{margin-top:0}
.mx-none${query},
.mr-none${query}{margin-right:0}
.my-none${query},
.mb-none${query}{margin-bottom:0}
.mx-none${query},
.ml-none${query}{margin-left:0}
.m-auto${query}{margin-right:auto;margin-left:auto;}
.mr-auto${query}{margin-right:auto}
.ml-auto${query}{margin-left:auto}
`

  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${rems({config, value})}}\n`
  }

  output += sided({config, template})
  return output
}
