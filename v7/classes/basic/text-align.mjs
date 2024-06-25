export default function textAlign({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Text Alignment ***/
.text-inherit${breakpoint}{text-align:inherit;}
.text-center${breakpoint}{text-align:center;}
.text-start${breakpoint}{text-align:start;}
.text-end${breakpoint}{text-align:end;}
  `
}
