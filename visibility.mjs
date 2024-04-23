export default function overflow(query = '') {
  return /*css*/`
/*** Visibility ***/
.invisible${query}{visibility:hidden;}
.visible${query}{visibility:visible;}
.screenreader-only${query}{border: 0; clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; word-wrap: normal;}
`
}
