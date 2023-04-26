export default function overflow (query='') {
  return /*css*/`
/*** Visibility ***/
.invisible${query}{visibility:hidden;}
.visible${query}{visibility:visible;}
`
}
