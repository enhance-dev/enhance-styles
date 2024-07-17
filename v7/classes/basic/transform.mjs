export default function transform({ breakpoint = '' } = {}) {
  return /*css*/`
/*** Text Transform ***/
.uppercase${breakpoint}{text-transform:uppercase;}
.lowercase${breakpoint}{text-transform:lowercase;}
.capitalize${breakpoint}{text-transform:capitalize;}
.normal-case${breakpoint}{text-transform:none;}
  `
}
