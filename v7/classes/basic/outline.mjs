export default function outline({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Outline ***/
.outline-none${breakpoint}{outline:0;}
  `
}
