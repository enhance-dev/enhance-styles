module.exports = function Opacity(query) {
  return /*css*/`
/* OPACITY */
.opacity-0${query}{opacity:0;}
.opacity-25${query}{opacity:0.25;}
.opacity-50${query}{opacity:0.5;}
.opacity-75${query}{opacity:0.75;}
.opacity-100${query}{opacity:1.0;}
`
}
