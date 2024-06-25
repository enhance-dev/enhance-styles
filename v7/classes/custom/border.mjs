const defaultWidths = [1, 2, 4]

export default function border({ breakpoint = '', widths = defaultWidths } = {}) {
  let output = /*css*/`
/*** Border ***/
.border-solid${breakpoint}{border-style:solid;}
.border-dashed${breakpoint}{border-style:dashed;}
.border-dotted${breakpoint}{border-style:dotted;}
.border-double${breakpoint}{border-style:double;}
.border-none${breakpoint}{border-style:none;}
.border-bs-none${breakpoint}{border-block-start:none;}
.border-be-none${breakpoint}{border-block-end:none;}
.border-is-none${breakpoint}{border-inline-start:none;}
.border-ie-none${breakpoint}{border-inline-end:none;}
`
  widths.map((w, i) => {
    output += `
.border${i}${breakpoint}{border-width:${w}px;}
.border-bs${i}${breakpoint}{border-block-start-width:${w}px;}
.border-be${i}${breakpoint}{border-block-end-width:${w}px;}
.border-is${i}${breakpoint}{border-inline-start-width:${w}px;}
.border-ie${i}${breakpoint}{border-inline-end-width:${w}px;}
`
  })
  return output
}
