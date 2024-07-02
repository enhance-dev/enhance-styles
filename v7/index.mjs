import sheetHeader from './lib/sheet-header.mjs'
import reset from './lib/reset.mjs'

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

// Basic classes
import background from './classes/basic/background.mjs'
import boxAlign from './classes/basic/box-align.mjs'
import color from './classes/basic/color.mjs'
import cursor from './classes/basic/cursor.mjs'
import debug from './classes/basic/debug.mjs'
import display from './classes/basic/display.mjs'
import flexbox from './classes/basic/flexbox.mjs'
import fontSmoothing from './classes/basic/font-smoothing.mjs'
import fontStyle from './classes/basic/font-style.mjs'
import fontWeight from './classes/basic/font-weight.mjs'
import inset from './classes/basic/inset.mjs'
import lineHeight from './classes/basic/line-height.mjs'
import listStyle from './classes/basic/list-style.mjs'
import objectFit from './classes/basic/object-fit.mjs'
import objectPosition from './classes/basic/object-position.mjs'
import opacity from './classes/basic/opacity.mjs'
import order from './classes/basic/order.mjs'
import outline from './classes/basic/outline.mjs'
import overflow from './classes/basic/overflow.mjs'
import position from './classes/basic/position.mjs'
import size from './classes/basic/size.mjs'
import textAlign from './classes/basic/text-align.mjs'
import textDecoration from './classes/basic/text-decoration.mjs'
import tracking from './classes/basic/tracking.mjs'
import transform from './classes/basic/transform.mjs'
import userSelect from './classes/basic/user-select.mjs'
import visibility from './classes/basic/visibility.mjs'
import whiteSpace from './classes/basic/white-space.mjs'
import wordBreak from './classes/basic/word-break.mjs'
import zIndex from './classes/basic/z-index.mjs'

export default function write(config) {
  try {
    const { breakpoints = {} } = config

    let output = sheetHeader() + '\n\n'

    // Allow optout of the CSS reset
    if (config.reset) {
      output += reset()
    }

    // Run a CSS generator function only if its respective config field is truthy
    function conditionallyWrite(field, generator, breakpoint = '') {
      if (field !== false) {
        output += generator({ config, breakpoint })
        output += '\n\n'
      }
    }

    function writeClasses(breakpoint = '') {
      // Custom classes; optional based on their respective fields being truthy
      conditionallyWrite(config.borders, borders, breakpoint)
      conditionallyWrite(config.fonts, fontFamily, breakpoint)
      conditionallyWrite(config.typeScale, fontSize, breakpoint)
      conditionallyWrite(config.spaceScale, gap, breakpoint)
      conditionallyWrite(config.grid, grid, breakpoint)
      conditionallyWrite(config.spaceScale, margin, breakpoint)
      conditionallyWrite(config.spaceScale, padding, breakpoint)

      // Basic classes; some don't get rerun for each breakpoint
      output += background({ breakpoint })
      output += boxAlign({ breakpoint })
      breakpoint === '' ? output += color() : ''
      output += cursor({ breakpoint })
      breakpoint === '' ? output += debug() : ''
      output += display({ breakpoint })
      output += flexbox({ breakpoint })
      breakpoint === '' ? output += fontSmoothing() : ''
      output += fontStyle({ breakpoint })
      output += fontWeight({ breakpoint })
      output += inset({ breakpoint })
      output += lineHeight({ breakpoint })
      output += listStyle({ breakpoint })
      output += objectFit({ breakpoint })
      output += objectPosition({ breakpoint })
      output += opacity({ breakpoint })
      output += order({ breakpoint })
      output += outline({ breakpoint })
      output += overflow({ breakpoint })
      output += position({ breakpoint })
      output += size({ breakpoint })
      output += textAlign({ breakpoint })
      output += textDecoration({ breakpoint })
      output += tracking({ breakpoint })
      output += transform({ breakpoint })
      output += userSelect({ breakpoint })
      output += visibility({ breakpoint })
      output += whiteSpace({ breakpoint })
      output += wordBreak({ breakpoint })
      output += zIndex({ breakpoint })
    }

    // Emit custom properties
    conditionallyWrite(config.borders.radii, borderRadius)
    conditionallyWrite(config.borders.widths, borderWidths)
    conditionallyWrite(config.color.scales, colorScales)
    conditionallyWrite(config.color.spots, colorSpots)
    conditionallyWrite(config.customProperties, customProperties)
    conditionallyWrite(config.fonts, fonts)
    conditionallyWrite(config.spaceScale, spaceScale)
    conditionallyWrite(config.typeScale, typeScale)

    // Optionally emit classes
    if (config.classes) {
      // Write default classes
      writeClasses()
      // Write media query scoped classes for each entry in `config.breakpoints`
      Object.entries(breakpoints).forEach(breakpoint => {
        const [label, width] = breakpoint
        output += '\n'
        output += `/*** Breakpoint: ${label} (${width}) ***/\n\n`
        output += `@media (min-width: ${width}) {\n`
        writeClasses(`-${label}`)
        output += '\n}'
      })
    }

    return output
  } catch (err) {
    throw err
  }
}
