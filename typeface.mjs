import family from './family.mjs'

export default function typeface(state={}) {
  const { config={} } = state
  return /*css*/`
/*** Typeface ***/
html {font-size: 16px;}
${family(config)}
body {
  font-weight: normal;
  line-height: 1;
  text-rendering: optimizeSpeed;
}
`
}
