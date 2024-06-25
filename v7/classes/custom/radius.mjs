export default function radius({ breakpoint = '', radii = [2, 8, 16, 9999] }) {
  let output = /*css*/`
/*** Radius ***/
.radius-none${breakpoint}{border-radius:0;}
.radius-100${breakpoint}{border-radius:100%;}
.radius-pill${breakpoint}{border-radius:9999px;}
.radius-bs-none${breakpoint},
.radius-is-none${breakpoint},
.radius-ss-none${breakpoint}{border-start-start-radius:0;}
.radius-bs-none${breakpoint},
.radius-ie-none${breakpoint},
.radius-se-none${breakpoint}{border-start-end-radius:0;}
.radius-be-none${breakpoint},
.radius-is-none${breakpoint},
.radius-es-none${breakpoint}{border-end-start-radius:0;}
.radius-be-none${breakpoint},
.radius-ie-none${breakpoint},
.radius-ee-none${breakpoint}{border-end-end-radius:0;}
`

  radii.map(function(r, i) {
    output += `.radius${i}${breakpoint}{border-radius:${r}px;}\n`
  })
  return output
}
