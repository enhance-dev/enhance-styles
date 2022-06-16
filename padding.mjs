import sided from './sided.mjs'
import rems from './rems.mjs'

export default function padding(state={}) {
  const { config, label:query } = state
  let output = /*css*/`
/* PADDING */
.p-none${query}{padding:0;}
.py-none${query},
.pt-none${query}{padding-top:0;}
.px-none${query},
.pr-none${query}{padding-right:0;}
.py-none${query},
.pb-none${query}{padding-bottom:0;}
.px-none${query},
.pl-none${query}{padding-left:0;}
`
  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${rems({config, value})};}\n`
  }

  output += sided({config, template})
  return output
}
