export default function flex(query='') {
  return /*css*/`
/* FLEX */
.flex-1${query}{flex: 1 1 0%;}
.flex-auto${query}{flex: 1 1 auto;}
.flex-initial${query}{flex: 0 1 auto;}
.flex-none${query}{flex:none;}
.flex-row${query}{flex-direction:row;}
.flex-row-reverse${query}{flex-direction:row-reverse;}
.flex-col${query}{flex-direction:column;}
.flex-col-reverse${query}{flex-direction:column-reverse;}
.items-stretch${query}{align-items:stretch;}
.items-start${query}{align-items:flex-start;}
.items-end${query}{align-items:flex-end;}
.items-center${query}{align-items:center;}
.content-start${query}{align-content:start;}
.content-center${query}{align-content:center;}
.content-end${query}{align-content:end;}
.content-between${query}{align-content:space-between;}
.content-around${query}{align-content:space-around;}
.self-auto${query}{align-self:auto;}
.self-start${query}{align-self:flex-start;}
.self-end${query}{align-self:flex-end;}
.self-center${query}{align-self:center;}
.self-stretch${query}{align-self:stretch;}
.justify-start${query}{justify-content:flex-start;}
.justify-end${query}{justify-content: flex-end;}
.justify-around${query}{justify-content:space-around;}
.justify-between${query}{justify-content:space-between;}
.justify-center${query}{justify-content:center;}
.flex-grow${query}{flex-grow:1;}
.flex-grow-0${query}{flex-grow:0;}
.flex-shrink${query}{flex-shrink:1;}
.flex-shrink-0${query}{flex-shrink:0;}
.flex-wrap${query}{flex-wrap:wrap;}
.flex-wrap-reverse${query}{flex-wrap:wrap-reverse;}
.flex-no-wrap${query}{flex-wrap:nowrap;}
.order-first${query}{order:-9999;}
.order-last${query}{order:9999;}
.order-none${query}{order:0;}
.order-1${query}{order:1;}
.order-2${query}{order:2;}
.order-3${query}{order:3;}
.order-4${query}{order:4;}
.order-5${query}{order:5;}
.order-6${query}{order:6;}
`
}
