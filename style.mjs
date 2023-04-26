export default function Style(query='') {
  return /*css*/`
/*** Style ***/
.italic${query}{font-style:italic;}
.not-italic${query}{font-style:normal;}
`
}
