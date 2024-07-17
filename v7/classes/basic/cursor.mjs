export default function cursor({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Cursor ***/
.cursor-auto${breakpoint}{cursor:auto;}
.cursor-default${breakpoint}{cursor:default;}
.cursor-pointer${breakpoint}{cursor:pointer;}
.cursor-wait${breakpoint}{cursor:wait;}
.cursor-text${breakpoint}{cursor:text;}
.cursor-move${breakpoint}{cursor:move;}
.cursor-not-allowed${breakpoint}{cursor:not-allowed;}
.cursor-grab${breakpoint}{cursor:grab;}
.cursor-grabbing${breakpoint}{cursor:grabbing;}
`
}
