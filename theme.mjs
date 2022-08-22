import reset from './reset.mjs'
import typeface from './typeface.mjs'
import properties from './properties.mjs'
import background from './background.mjs'
import border from './border.mjs'
import color from './color.mjs'
import themeColor from './theme-color.mjs'
import fill from './fill.mjs'
import stroke from './stroke.mjs'

export default function theme(config) {
  return /*css*/`
/* ----- THEME ----- */
${themeColor({config})}
${properties({config})}
${reset()}
${typeface({config})}
${background({config})}
${border({config})}
${color({config})}
${fill({config})}
${stroke({config})}
`
}
