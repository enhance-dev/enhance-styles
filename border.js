const radius = require('./radius')

module.exports = function border(state={}) {
  const query = state.query || ''
  const config = state.config
  const widths = (config.borders &&
    config.borders.widths || [1])
  widths.unshift(0)
  let output = /*css*/`
/* BORDER */
.border-solid${query}{border-style:solid;}
.border-dashed${query}{border-style:dashed;}
.border-dotted${query}{border-style:dotted;}
.border-double${query}{border-style:double;}
.border-none${query}{border-style:none;}
.border-t-none${query}{border-top:none;}
.border-r-none${query}{border-right:none;}
.border-b-none${query}{border-bottom:none;}
.border-l-none${query}{border-left:none;}
`
  widths.map((w, i) => {
    output += `
.border${i}${query}{border-width:${w}px;}
.border-t${i}${query}{border-top-width:${w}px;}
.border-r${i}${query}{border-right-width:${w}px;}
.border-b${i}${query}{border-bottom-width:${w}px;}
.border-l${i}${query}{border-left-width:${w}px;}
`
  })

  output += '\n'
  output += radius({config, query})
  return output
}
