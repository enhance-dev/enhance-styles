import generateDirectionalVariants from '../../lib/generateDirectionalVariants.mjs'
import { defaultConfig } from '../../lib/scales.mjs'

export default function padding({ breakpoint = '', spaceScale = defaultConfig } = {}) {
  let output = /*css*/`
/*** Padding ***/
.p-none${breakpoint}{padding:0}
.pb-none${breakpoint}{padding-block:0}
.pbs-none${breakpoint}{padding-block-start:0}
.pbe-none${breakpoint}{padding-block-end:0}
.pi-none${breakpoint}{padding-inline:0}
.pis-none${breakpoint}{padding-inline-start:0}
.pie-none${breakpoint}{padding-inline-end:0}
`
  function template({ label, step, direction, value }) {
    // Redefine `direction` arg with a formatted version of it, if the arg is truthy
    if (direction) direction = `-${direction}`
    return `.p${label}${step}${breakpoint}{padding${direction}:${value};}\n`
  }

  output += generateDirectionalVariants({ spaceScale, template })
  return output
}
