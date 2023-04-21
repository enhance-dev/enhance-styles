export default function inset (query='') {
  return /*css*/`
/* INSET */
.i-0${query}{inset:0}
.ib-0${query}{inset-block:0}
.ibs-0${query}{inset-block-start:0}
.ibe-0${query}{inset-block-end:0}
.ii-0${query}{inset-inline:0}
.iis-0${query}{inset-inline-start:0}
.iie-0${query}{inset-inline-end:0}
`
}
