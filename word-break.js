module.exports = function wordbreak(query='') {
  return /*css*/`
/* WORDBREAK */
.break-normal${query}{word-break:normal;}
.break-normal,
.break-words${query}{overflow-wrap:normal;}
.break-all${query}{word-break:break-all;}
.truncate,
.ellipsis${query}{text-overflow:ellipsis;}
  `
}
