export default function radius (state={}) {
  const { config={}, query=''} = state
  const { radii=[] } = config
  let output = /*css*/`
/*** Radius ***/
.radius-none${query}{border-radius:0;}
.radius-100${query}{border-radius:100%;}
.radius-pill${query}{border-radius:9999px;}
.radius-bs-none${query},
.radius-is-none${query},
.radius-ss-none${query}{border-start-start-radius:0;}
.radius-bs-none${query},
.radius-ie-none${query},
.radius-se-none${query}{border-start-end-radius:0;}
.radius-be-none${query},
.radius-is-none${query},
.radius-es-none${query}{border-end-start-radius:0;}
.radius-be-none${query},
.radius-ie-none${query},
.radius-ee-none${query}{border-end-end-radius:0;}
`

  radii.map(function (r, i) {
    output += `.radius${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
