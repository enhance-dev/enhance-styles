export default function inset (query='') {
  return /*css*/`
/* INSET */
.inset-0${query}{inset:0}
.inset-b-0${query}{inset-block:0}
.inset-bs-0${query}{inset-block-start:0}
.inset-be-0${query}{inset-block-end:0}
.inset-i-0${query}{inset-inline:0}
.inset-is-0${query}{inset-inline-start:0}
.inset-ie-0${query}{inset-inline-end:0}
`
}
