export default function wordbreak(query='') {
  return /*css*/`
/*** Wordbreak ***/
.break-normal${query}{word-break:normal}
.break-normal${query},
.break-word${query}{overflow-wrap:normal}
.break-all${query}{word-break:break-all}
.break-keep${query}{word-break:keep-all}
.truncate${query},
.ellipsis${query}{text-overflow:ellipsis}
  `
}
