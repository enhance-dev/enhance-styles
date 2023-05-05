import sided from './sided.mjs'

export default function margin (state={}) {
  const { config = {}, label:query = '' } = state
  let output = /*css*/`
/*** Margin ***/
.m-none${query}{margin:0}
.mb-none${query}{margin-block:0}
.mbs-none${query}{margin-block-start:0}
.mbe-none${query}{margin-block-end:0}
.mi-none${query}{margin-inline:0}
.mis-none${query}{margin-inline-start:0}
.mie-none${query}{margin-inline-end:0}
.m-auto${query}{margin:auto}
.mb-auto${query}{margin-block:auto}
.mbs-auto${query}{margin-block-start:auto}
.mbe-auto${query}{margin-block-end:auto}
.mi-auto${query}{margin-inline:auto}
.mis-auto${query}{margin-inline-start:auto}
.mie-auto${query}{margin-inline-end:auto}
`

  function template ({ label, step, side, value }) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${value};}\n`
  }

  output += sided({config, template})
  return output
}
