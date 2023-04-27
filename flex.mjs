export default function flex(query='') {
  return /*css*/`
/*** Flex ***/
.flex-1${query}{flex: 1 1 0%;}
.flex-auto${query}{flex: 1 1 auto;}
.flex-initial${query}{flex: 0 1 auto;}
.flex-none${query}{flex:none;}
.flex-row${query}{flex-direction:row;}
.flex-row-reverse${query}{flex-direction:row-reverse;}
.flex-col${query}{flex-direction:column;}
.flex-col-reverse${query}{flex-direction:column-reverse;}
.flex-grow${query}{flex-grow:1;}
.flex-grow-0${query}{flex-grow:0;}
.flex-shrink${query}{flex-shrink:1;}
.flex-shrink-0${query}{flex-shrink:0;}
.flex-wrap${query}{flex-wrap:wrap;}
.flex-wrap-reverse${query}{flex-wrap:wrap-reverse;}
.flex-no-wrap${query}{flex-wrap:nowrap;}
`
}
