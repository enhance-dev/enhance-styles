export default function flexbox({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Flexbox ***/
.flex-1${breakpoint}{flex: 1 1 0%;}
.flex-auto${breakpoint}{flex: 1 1 auto;}
.flex-initial${breakpoint}{flex: 0 1 auto;}
.flex-none${breakpoint}{flex:none;}
.flex-row${breakpoint}{flex-direction:row;}
.flex-row-reverse${breakpoint}{flex-direction:row-reverse;}
.flex-col${breakpoint}{flex-direction:column;}
.flex-col-reverse${breakpoint}{flex-direction:column-reverse;}
.flex-grow${breakpoint}{flex-grow:1;}
.flex-grow-0${breakpoint}{flex-grow:0;}
.flex-shrink${breakpoint}{flex-shrink:1;}
.flex-shrink-0${breakpoint}{flex-shrink:0;}
.flex-wrap${breakpoint}{flex-wrap:wrap;}
.flex-wrap-reverse${breakpoint}{flex-wrap:wrap-reverse;}
.flex-no-wrap${breakpoint}{flex-wrap:nowrap;}
`
}
