export default function getCustomProperties(css) {
  const lines = css.split('\n')

  const properties = lines
    .filter(l => l.includes('--')) // filter to only lines with custom property definitions
    .map(l => {
      const minified = l.replaceAll(' ', '') // remove all spaces to make substring easier
      const property = minified.substring(0, minified.indexOf(':')) // trim to custom property name only
      return property
    })

  return properties
}
