export default function userSelect(query='') {
  return /*css*/`
/*** User Select ***/
.select-none${query}{user-select:none;}
.select-text${query}{user-select:text;}
.select-all${query}{user-select:all;}
.select-auto${query}{user-select:auto;}
  `
}
