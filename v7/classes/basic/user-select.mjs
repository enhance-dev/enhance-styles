export default function userSelect({ breakpoint = '' } = {}) {
  return /*css*/`
/*** User Select ***/
.select-none${breakpoint}{user-select:none;}
.select-text${breakpoint}{user-select:text;}
.select-all${breakpoint}{user-select:all;}
.select-auto${breakpoint}{user-select:auto;}
  `
}
