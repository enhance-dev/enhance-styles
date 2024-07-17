export default function order({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Order ***/
.order-first${breakpoint}{order:-9999;}
.order-last${breakpoint}{order:9999;}
.order-none${breakpoint}{order:0;}
.order-1${breakpoint}{order:1;}
.order-2${breakpoint}{order:2;}
.order-3${breakpoint}{order:3;}
.order-4${breakpoint}{order:4;}
.order-5${breakpoint}{order:5;}
.order-6${breakpoint}{order:6;}
`
}
