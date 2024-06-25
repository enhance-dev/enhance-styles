export default function display({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Display ***/
.hidden${breakpoint}{display:none;}
.block${breakpoint}{display:block;}
.inline${breakpoint}{display:inline;}
.inline-block${breakpoint}{display:inline-block;}
.flex${breakpoint}{display:flex;}
.inline-flex${breakpoint}{display:inline-flex;}
.grid${breakpoint}{display:grid;}
.inline-grid${breakpoint}{display:inline-grid;}
`
}
