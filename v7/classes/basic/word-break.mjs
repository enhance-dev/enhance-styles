export default function wordbreak({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Wordbreak ***/
.break-normal${breakpoint}{word-break:normal}
.break-normal${breakpoint},
.break-word${breakpoint}{overflow-wrap:normal}
.break-all${breakpoint}{word-break:break-all}
.break-keep${breakpoint}{word-break:keep-all}
.truncate${breakpoint},
.ellipsis${breakpoint}{text-overflow:ellipsis}
  `
}
