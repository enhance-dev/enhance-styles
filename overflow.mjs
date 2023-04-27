export default function overflow (query) {
  return /*css*/`
/*** Overflow ***/
.overflow-auto${query}{overflow:auto;}
.truncate${query},
.overflow-hidden${query}{overflow:hidden;}
.overflow-visible${query}{overflow:visible;}
.overflow-scroll${query}{overflow:scroll;}
.overflow-x-auto${query}{overflow-x:auto;}
.overflow-y-auto${query}{overflow-y:auto;}
.overflow-x-scroll${query}{overflow-x:scroll;}
.overflow-x-hidden${query}{overflow-x:hidden;}
.overflow-y-scroll${query}{overflow-y:scroll;}
.overflow-y-hidden${query}{overflow-y:hidden;}
.scrolling-touch${query}{-webkit-overflow-scrolling:touch;}
.scrolling-auto${query}{-webkit-overflow-scrolling:auto;}
`
}
