import family from './family.mjs'

export default function typeface(state={}) {
  const { config={} } = state
  const bodyFontSize = config.typeScale
    ? 'var(--text-0)'
    : '1rem'

  return /*css*/`
/*** Typeface ***/
html {font-size: 100%;}
${family(config)}
body {
  font-size: ${bodyFontSize};
  font-weight: normal;
  line-height: 1;
  text-rendering: optimizeSpeed;
}
`
}
