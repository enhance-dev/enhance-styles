import getCustomProperties from '../../lib/getCustomProperties.mjs'
import fonts from '../../properties/fonts.mjs'

export default function fontFamily(state = {}) {
  const { config = {} } = state
  const families = getCustomProperties(fonts({ config }))

  let output = ''

  if (families.length) {
    output += '/*** Font Family ***/'
    families.forEach(family => {
      output += '\n'
      output += `.${family.replace('--', '')} { font-family: var(${family}); }`
    })
  }

  return output
}
