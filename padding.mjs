import sided from './sided.mjs'

export default function padding(state={}) {
  const { config = {}, label: query = '' } = state
  let output = /*css*/`
/*** Padding ***/
.p-none${query}{padding:0}
.pb-none${query}{padding-block:0}
.pbs-none${query}{padding-block-start:0}
.pbe-none${query}{padding-block-end:0}
.pi-none${query}{padding-inline:0}
.pis-none${query}{padding-inline-start:0}
.pie-none${query}{padding-inline-end:0}
`
  function template ({ label, step, side, value }) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${value};}\n`
  }

  output += sided({config, template})
  return output
}
