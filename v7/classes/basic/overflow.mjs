export default function overflow({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Overflow ***/
.overflow-auto${breakpoint}{overflow:auto;}
.truncate${breakpoint},
.overflow-hidden${breakpoint}{overflow:hidden;}
.overflow-visible${breakpoint}{overflow:visible;}
.overflow-scroll${breakpoint}{overflow:scroll;}
.overflow-x-auto${breakpoint}{overflow-x:auto;}
.overflow-y-auto${breakpoint}{overflow-y:auto;}
.overflow-x-scroll${breakpoint}{overflow-x:scroll;}
.overflow-x-hidden${breakpoint}{overflow-x:hidden;}
.overflow-y-scroll${breakpoint}{overflow-y:scroll;}
.overflow-y-hidden${breakpoint}{overflow-y:hidden;}
.scrolling-touch${breakpoint}{-webkit-overflow-scrolling:touch;}
.scrolling-auto${breakpoint}{-webkit-overflow-scrolling:auto;}
`
}
