export default function textDecoration({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Text Decoration ***/
.no-underline${breakpoint}{text-decoration:none;}
.underline${breakpoint}{text-decoration:underline;}
.line-through${breakpoint}{text-decoration:line-through;}
  `
}
