export default function whitespace({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Whitespace ***/
.whitespace-normal${breakpoint}{white-space:normal;}
.truncate${breakpoint},
.whitespace-no-wrap${breakpoint}{white-space:nowrap;}
.whitespace-pre${breakpoint}{white-space:pre;}
.whitespace-pre-line${breakpoint}{white-space:pre-line;}
.whitespace-pre-wrap${breakpoint}{white-space:pre-wrap;}
  `
}
