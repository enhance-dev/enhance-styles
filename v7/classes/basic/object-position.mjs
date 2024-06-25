export default function objectPosition({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Object Position ***/
.object-b${breakpoint}{object-position:bottom;}
.object-c${breakpoint}{object-position:center;}
.object-t${breakpoint}{object-position:top;}
.object-r${breakpoint}{object-position:right;}
.object-rt${breakpoint}{object-position:right top;}
.object-rb${breakpoint}{object-position:right bottom;}
.object-l${breakpoint}{object-position:left;}
.object-lt${breakpoint}{object-position:left top;}
.object-lb${breakpoint}{object-position:left bottom;}
  `
}
