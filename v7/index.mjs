import sheetHeader from './lib/sheet-header.mjs'

// Custom properties
import borderRadius from './properties/border-radius.mjs'
import borderWidths from './properties/border-widths.mjs'
import colorScales from './properties/color-scales.mjs'
import colorSpots from './properties/color-spots.mjs'
import customProperties from './properties/custom-properties.mjs'
import fonts from './properties/fonts.mjs'
import spaceScale from './properties/space-scale.mjs'
import typeScale from './properties/type-scale.mjs'

// Custom classes
import borders from './classes/custom/borders.mjs'
import fontFamily from './classes/custom/font-family.mjs'
import fontSize from './classes/custom/font-size.mjs'
import gap from './classes/custom/gap.mjs'
import grid from './classes/custom/grid.mjs'
import margin from './classes/custom/margin.mjs'
import padding from './classes/custom/padding.mjs'

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

    // Custom properties
    conditionallyWrite(config.borders.radii, borderRadius)
    conditionallyWrite(config.borders.widths, borderWidths)
    conditionallyWrite(config.color.scales, colorScales)
    conditionallyWrite(config.color.spots, colorSpots)
    conditionallyWrite(config.customProperties, customProperties)
    conditionallyWrite(config.fonts, fonts)
    conditionallyWrite(config.spaceScale, spaceScale)
    conditionallyWrite(config.typeScale, typeScale)

    // Custom classes
    conditionallyWrite(config.borders, borders)
    conditionallyWrite(config.fonts, fontFamily)
    conditionallyWrite(config.typeScale, fontSize)
    conditionallyWrite(config.spaceScale, gap)
    conditionallyWrite(config.grid, grid)
    conditionallyWrite(config.spaceScale, margin)
    conditionallyWrite(config.spaceScale, padding)

    return output

  } catch (err) {
    throw err
  }
}
