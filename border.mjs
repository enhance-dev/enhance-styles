import radius from './radius.mjs'

export default function border(state={}) {
  const query = state.query || ''
  const config = state.config
  const widths = (config.borders &&
    config.borders.widths || [1])
  widths.unshift(0)
  let output = /*css*/`
/*** Border ***/
.border-solid${query}{border-style:solid;}
.border-dashed${query}{border-style:dashed;}
.border-dotted${query}{border-style:dotted;}
.border-double${query}{border-style:double;}
.border-none${query}{border-style:none;}
.border-bs-none${query}{border-block-start:none;}
.border-be-none${query}{border-block-end:none;}
.border-is-none${query}{border-inline-start:none;}
.border-ie-none${query}{border-inline-end:none;}
`
  widths.map((w, i) => {
    output += `
.border${i}${query}{border-width:${w}px;}
.border-bs${i}${query}{border-block-start-width:${w}px;}
.border-be${i}${query}{border-block-end-width:${w}px;}
.border-is${i}${query}{border-inline-start-width:${w}px;}
.border-ie${i}${query}{border-inline-end-width:${w}px;}
`
  })

  output += '\n'
  output += radius({config, query})
  return output
}
