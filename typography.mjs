import sizes from './sizes.mjs'
import style from './style.mjs'
import lineHeight from './line-height.mjs'
import weights from './weights.mjs'
import align from './align.mjs'
import decoration from './decoration.mjs'
import tracking from './tracking.mjs'
import list from './list.mjs'
import whitespace from './white-space.mjs'
import wordbreak from './word-break.mjs'
import transform from './transform.mjs'

export default function typography(state={}) {
  const { label:query='' } = state
  return `
${sizes(state)}
${style(query)}
${lineHeight(query)}
${tracking(query)}
${weights(query)}
${transform(query)}
${align(query)}
${decoration(query)}
${list(query)}
${whitespace(query)}
${wordbreak(query)}
  `
}
