export default function list(query='') {
  return /*css*/`
/*** List ***/
.list-none${query}{list-style:none;}
.list-disc${query}{list-style:disc;}
.list-decimal${query}{list-style:decimal;}
`
}
