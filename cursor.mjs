export default function Cursor(query) {
  return /*css*/`
/*** Cursor ***/
.cursor-auto${query}{cursor:auto;}
.cursor-default${query}{cursor:default;}
.cursor-pointer${query}{cursor:pointer;}
.cursor-wait${query}{cursor:wait;}
.cursor-text${query}{cursor:text;}
.cursor-move${query}{cursor:move;}
.cursor-not-allowed${query}{cursor:not-allowed;}
.cursor-grab${query}{cursor:grab;}
.cursor-grabbing${query}{cursor:grabbing;}
`
}
