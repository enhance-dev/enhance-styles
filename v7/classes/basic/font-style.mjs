export default function fontStyle({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Font Style ***/
.italic${breakpoint}{font-style:italic;}
.not-italic${breakpoint}{font-style:normal;}
`
}
