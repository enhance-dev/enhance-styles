import docHeader from './doc-header.mjs'
import theme from './theme.mjs'
import typography from './typography.mjs'
import cursor from './cursor.mjs'
import layout from './layout.mjs'
import margin from './margin.mjs'
import padding from './padding.mjs'
import overflow from './overflow.mjs'
import visibility from './visibility.mjs'
import objectFit from './object-fit.mjs'
import objectPosition from './object-position.mjs'
import outline from './outline.mjs'
import opacity from './opacity.mjs'
import media from './media.mjs'
import userSelect from './user-select.mjs'
import debug from './debug.mjs'

export default function enhanceStyles (props) {
  try {
    const config = JSON.parse(props)
    const { queries={} } = config
    let output = docHeader()
    output += theme(config)
    output += styles({config})

    Object.keys(queries)
      .map(
        function (query) {
          output += media(queries[query], styles({config, query}))
        }
      )

    return output
  } catch(err) {
    throw err
  }
}

function styles (state={}) {
  const { config={}, query='' } = state
  const label = query
    ? `-${query}`
    : ''
  return /*css*/`
${typography({config, label})}
${layout({config, label})}
${margin({config, label})}
${padding({config, label})}
${overflow(label)}
${visibility(label)}
${objectFit(label)}
${objectPosition(label)}
${outline(label)}
${opacity(label)}
${cursor(label)}
${userSelect(label)}
${debug()}
`
}
