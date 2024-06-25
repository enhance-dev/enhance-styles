import generateDirectionalVariants from '../../lib/generateDirectionalVariants.mjs'
import { defaultConfig } from '../../lib/scales.mjs'

export default function margin({ breakpoint = '', spaceScale = defaultConfig }) {
  let output = /*css*/`
/*** Margin ***/
.m-none${breakpoint}{margin:0}
.mb-none${breakpoint}{margin-block:0}
.mbs-none${breakpoint}{margin-block-start:0}
.mbe-none${breakpoint}{margin-block-end:0}
.mi-none${breakpoint}{margin-inline:0}
.mis-none${breakpoint}{margin-inline-start:0}
.mie-none${breakpoint}{margin-inline-end:0}
.m-auto${breakpoint}{margin:auto}
.mb-auto${breakpoint}{margin-block:auto}
.mbs-auto${breakpoint}{margin-block-start:auto}
.mbe-auto${breakpoint}{margin-block-end:auto}
.mi-auto${breakpoint}{margin-inline:auto}
.mis-auto${breakpoint}{margin-inline-start:auto}
.mie-auto${breakpoint}{margin-inline-end:auto}
`

  function template({ label, step, direction, value }) {
    // Redefine `direction` arg with a formatted version of it, if the arg is truthy
    if (direction) direction = `-${direction}`
    return `.m${label}${step}${breakpoint}{margin${direction}:${value};}\n`
  }

  output += generateDirectionalVariants({ spaceScale, template })
  return output
}
