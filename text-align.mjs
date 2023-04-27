export default function align(query='') {
  return /*css*/`
/*** Text alignment ***/
.text-inherit${query}{text-align:inherit;}
.text-center${query}{text-align:center;}
.text-start${query}{text-align:start;}
.text-end${query}{text-align:end;}
  `
}
