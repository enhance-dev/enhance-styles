export default function size (query='') {
  return /*css*/`
/*** Size ***/
.sb-0${query}{block-size:0}
.sb-auto${query}{block-size:auto}
.sb-100${query}{block-size:100%}
.sb-min-0${query}{min-block-size:0}
.sb-min-none${query}{min-block-size:none}
.sb-min-100${query}{min-block-size:100%}
.sb-max-0${query}{max-block-size:0}
.sb-max-none${query}{max-block-size:none}
.sb-max-100${query}{max-block-size:100%}
.sb-100vw${query}{block-size:100vw}
.sb-100vh${query}{block-size:100vh}
.si-0${query}{inline-size:0}
.si-auto${query}{inline-size:auto}
.si-100${query}{inline-size:100%}
.si-min-0${query}{min-inline-size:0}
.si-min-none${query}{min-inline-size:none}
.si-min-100${query}{min-inline-size:100%}
.si-max0${query}{max-inline-size:0}
.si-max-none${query}{max-inline-size:none}
.si-max-100${query}{max-inline-size:100%}
.si-100vw${query}{inline-size:100vw}
.si-100vh${query}{inline-size:100vh}
`
}
