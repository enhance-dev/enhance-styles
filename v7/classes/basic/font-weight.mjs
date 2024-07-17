export default function FontWeight({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Font Weight ***/
.font-hairline${breakpoint}{font-weight:100;}
.font-thin${breakpoint}{font-weight:200;}
.font-light${breakpoint}{font-weight:300;}
.font-normal${breakpoint}{font-weight:400;}
.font-medium${breakpoint}{font-weight:500;}
.font-semibold${breakpoint}{font-weight:600;}
.font-bold${breakpoint}{font-weight:700;}
.font-extrabold${breakpoint}{font-weight:800;}
.font-black${breakpoint}{font-weight:900;}
`
}
