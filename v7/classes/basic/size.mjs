export default function size({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Size ***/
.sb-0${breakpoint}{block-size:0}
.sb-auto${breakpoint}{block-size:auto}
.sb-100${breakpoint}{block-size:100%}
.sb-min-0${breakpoint}{min-block-size:0}
.sb-min-100${breakpoint}{min-block-size:100%}
.sb-max-0${breakpoint}{max-block-size:0}
.sb-max-100${breakpoint}{max-block-size:100%}
.sb-100vw${breakpoint}{block-size:100vw}
.sb-100vh${breakpoint}{block-size:100vh}
.si-0${breakpoint}{inline-size:0}
.si-auto${breakpoint}{inline-size:auto}
.si-100${breakpoint}{inline-size:100%}
.si-min-0${breakpoint}{min-inline-size:0}
.si-min-100${breakpoint}{min-inline-size:100%}
.si-max0${breakpoint}{max-inline-size:0}
.si-max-100${breakpoint}{max-inline-size:100%}
.si-100vw${breakpoint}{inline-size:100vw}
.si-100vh${breakpoint}{inline-size:100vh}
`
}
