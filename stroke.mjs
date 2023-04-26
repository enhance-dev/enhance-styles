export default function stroke(state={}) {
  const { query='' } = state
  return /*css*/`
/*** Stroke ***/
.stroke-none${query}{stroke:none;}
.stroke-current${query}{stroke:currentColor;}
  `
}
