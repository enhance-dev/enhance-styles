export default function listStyle({ breakpoint = '' } = {}) {
  return /*css*/`
/*** List Style ***/
.list-none${breakpoint}{list-style:none;}
.list-disc${breakpoint}{list-style:disc;}
.list-decimal${breakpoint}{list-style:decimal;}
`
}
