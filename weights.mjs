export default function FontWeight (query='') {
  return /*css*/`
/*** Font Weight ***/
.font-hairline${query}{font-weight:100;}
.font-thin${query}{font-weight:200;}
.font-light${query}{font-weight:300;}
.font-normal${query}{font-weight:400;}
.font-medium${query}{font-weight:500;}
.font-semibold${query}{font-weight:600;}
.font-bold${query}{font-weight:700;}
.font-extrabold${query}{font-weight:800;}
.font-black${query}{font-weight:900;}
`
}
