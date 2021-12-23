module.exports = function radius (state={}) {
  const { config={}, query=''} = state
  const radii = config.radii
  let output = /*css*/`
/* RADIUS */
.radius-none${query}{border-radius:0;}
.radius-100${query}{border-radius:100%;}
.radius-pill${query}{border-radius:9999px;}
.radius-t-none,
.radius-r-none,
.radius-tr-none${query}{border-top-right-radius:0;}
.radius-b-none,
.radius-r-none,
.radius-br-none${query}{border-bottom-right-radius:0;}
.radius-t-none,
.radius-l-none,
.radius-tl-none${query}{border-top-left-radius:0;}
.radius-b-none,
.radius-l-none,
.radius-bl-none${query}{border-bottom-left-radius:0;}
`

  radii.map(function (r, i) {
    output += `.radius${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
