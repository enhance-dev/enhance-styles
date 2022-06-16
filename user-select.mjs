export default function userSelect(query='') {
  return /*css*/`
/* USER SELECT */
.select-none${query}{user-select:none;}
.select-text${query}{user-select:text;}
.select-all${query}{user-select:all;}
.select-auto${query}{user-select:auto;}
  `
}
