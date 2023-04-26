export default function transform(query='') {
  return /*css*/`
/*** Text Transform ***/
.uppercase${query}{text-transform:uppercase;}
.lowercase${query}{text-transform:lowercase;}
.capitalize${query}{text-transform:capitalize;}
.normal-case${query}{text-transform:none;}
  `
}
