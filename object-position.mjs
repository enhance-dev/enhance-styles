export default function ObjectPosition(query) {
  return /*css*/`
/*** Object Position ***/
.object-b${query}{object-position:bottom;}
.object-c${query}{object-position:center;}
.object-t${query}{object-position:top;}
.object-r${query}{object-position:right;}
.object-rt${query}{object-position:right top;}
.object-rb${query}{object-position:right bottom;}
.object-l${query}{object-position:left;}
.object-lt${query}{object-position:left top;}
.object-lb${query}{object-position:left bottom;}
  `
}
