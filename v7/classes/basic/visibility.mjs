export default function visibility({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Visibility ***/
.invisible${breakpoint}{visibility:hidden;}
.visible${breakpoint}{visibility:visible;}
.screenreader-only${breakpoint}{border: 0; clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; word-wrap: normal;}
`
}
