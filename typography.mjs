import fontSize from './font-size.mjs'
import style from './style.mjs'
import lineHeight from './line-height.mjs'
import weights from './weights.mjs'
import textAlign from './text-align.mjs'
import decoration from './decoration.mjs'
import tracking from './tracking.mjs'
import list from './list.mjs'
import whitespace from './white-space.mjs'
import wordbreak from './word-break.mjs'
import transform from './transform.mjs'

export default function typography(state={}) {
  const { label:query='' } = state
  return `
${fontSize(state)}
${style(query)}
${lineHeight(query)}
${tracking(query)}
${weights(query)}
${transform(query)}
${textAlign(query)}
${decoration(query)}
${list(query)}
${whitespace(query)}
${wordbreak(query)}
  `
}
