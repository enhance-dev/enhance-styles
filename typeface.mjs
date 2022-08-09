import family from './family.mjs'

export default function typeface(state={}) {
  const { config={} } = state
  const { base=16 } = config
  return /*css*/`
/* TYPEFACE */
html {font-size: ${base}px;}
${family(config)}
body {
  font-weight: normal;
  line-height: 1;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
}
