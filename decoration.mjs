export default function decoration(query='') {
  return /*css*/`
/*** Decoration ***/
.no-underline${query}{text-decoration:none;}
.underline${query}{text-decoration:underline;}
.line-through${query}{text-decoration:line-through;}
  `
}
