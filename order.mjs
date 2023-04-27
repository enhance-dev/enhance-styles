export default function order(query='') {
  return /*css*/`
/*** Order ***/
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
