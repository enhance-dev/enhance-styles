export default function position({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Position ***/
.sticky${breakpoint}{position:sticky;}
.static${breakpoint}{position:static;}
.absolute${breakpoint}{position:absolute;}
.relative${breakpoint}{position:relative;}
.fixed${breakpoint}{position:fixed;}
`
}
