import sided from './sided.mjs'
import rems from './rems.mjs'

export default function margin (state={}) {
  const { config, label:query } = state
  let output = /*css*/`
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
.mx-auto${query},
.m-auto${query}{margin-right:auto;margin-left:auto;}
.mr-auto${query}{margin-right:auto}
.ml-auto${query}{margin-left:auto}
.my-auto${query}{margin-top:auto;margin-bottom:auto;}
`

  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${rems({config, value})}}\n`
  }

  output += sided({config, template})
  return output
}
