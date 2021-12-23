module.exports = function transform(query='') {
  return /*css*/`
/* TEXT TRANSFORM */
.uppercase${query}{text-transform:uppercase;}
.lowercase${query}{text-transform:lowercase;}
.capitalize${query}{text-transform:capitalize;}
.normal-case${query}{text-transform:none;}
  `
}
