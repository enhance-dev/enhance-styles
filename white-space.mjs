export default function whitespace(query='') {
  return /*css*/`
/*** Whitespace ***/
.whitespace-normal${query}{white-space:normal;}
.truncate${query},
.whitespace-no-wrap${query}{white-space:nowrap;}
.whitespace-pre${query}{white-space:pre;}
.whitespace-pre-line${query}{white-space:pre-line;}
.whitespace-pre-wrap${query}{white-space:pre-wrap;}
  `
}
