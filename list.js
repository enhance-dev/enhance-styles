module.exports = function list(query='') {
  return /*css*/`
/* LIST */
.list-none${query}{list-style:none;}
.list-disc${query}{list-style:disc;}
.list-decimal${query}{list-style:decimal;}
`
}
