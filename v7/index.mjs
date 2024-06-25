import sheetHeader from './lib/sheet-header.mjs'

import borderRadius from './properties/border-radius.mjs'
import borderWidths from './properties/border-widths.mjs'
import colorScales from './properties/color-scales.mjs'
import colorSpots from './properties/color-spots.mjs'
import customProperties from './properties/custom-properties.mjs'
import fonts from './properties/fonts.mjs'
import spaceScale from './properties/space-scale.mjs'
import typeScale from './properties/type-scale.mjs'

export default function write(config) {

  try {
    // const { breakpoints = {} } = config

    let output = sheetHeader() + '\n\n'

    function conditionallyWrite(field, generator) {
      if (field !== false) {
        output += generator({ config })
        output += '\n\n'
      }
    }

    // Custom Properties
    conditionallyWrite(config.borders.radii, borderRadius)
    conditionallyWrite(config.borders.widths, borderWidths)
    conditionallyWrite(config.color.scales, colorScales)
    conditionallyWrite(config.color.spots, colorSpots)
    conditionallyWrite(config.customProperties, customProperties)
    conditionallyWrite(config.fonts, fonts)
    conditionallyWrite(config.spaceScale, spaceScale)
    conditionallyWrite(config.typeScale, typeScale)

    return output

  } catch (err) {
    throw err
  }
}
