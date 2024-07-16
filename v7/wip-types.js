/**
 * Configuration for Enhance Styles
 * @typedef {object} Styleguide
 * @property {boolean} [classes=true] - Emit single purpose classes in addition to CSS custom properties
 * @property {boolean} [reset=true] - Include a CSS reset with Enhance Styles’ output
 * @property {object} [borders] - Parent object for border properties
 * @property {(string | number)[]} [borders.radii] - Values to use for border radius properties and classes
 * @property {(string | number)[]} [borders.widths] - Values to use for border width properties and classes
 * @property {{[string]: string}} [breakpoints] - Named breakpoints enumerating min-width viewport media query values; breakpoint scoped classes will be suffixed with the names of the keys of this object at the viewport width specified
 * @property {object} [color] - Parent object for color configuration
 * @property {{[string]: string}} [color.scales] - Set of named colors with values to use as the median entry for generated color scales; resulting scales will use the key of each entry as their name plus a base 100 suffix from 100 to 900; entries from 400–100 will be progressively lighter; entries from 600–900 will be progressively darker; the -500 entry will duplicate the value provided for each color; colors must be suppled as hexadecimal values
 * @property {{[string]: string}} [color.spots] - Set of named spot colors to use for color custom properties; colors can be supplied in any standardized format
 * @property {{[string]: string}} [customProperties] - Set of arbitrary names and string values to use for CSS custom properties
 * @property {{[string]: string}} [fonts] - Set of named font stacks to use for font custom properties and classes
 * @property {object} [grid] - Parent object for grid configuration
 * @property {number} [grid.steps] - The number of steps to use when generating [column|row]-[start|end] grid classes
 * @property {object} [spaceScale] - Parent object for space scale configuration
 * @property {number} [spaceScale.steps=6] - The number of symmetrical intervals to create for the space scale, plus the base size
 * @property {number} [spaceScale.baseMin=16] - The base spacing interval size, in pixels, at the minimum viewport width  
 * @property {number} [spaceScale.baseMax=18] - The base spacing interval size, in pixels, at the maximum viewport width  
 * @property {number|string} [spaceScale.scaleMin=minor-third] - The ratio, either as a rational number or a named ratio, to use for spacing intervals at the minimum viewport width 
 * @property {number|string} [spaceScale.scaleMax=perfect-fourth] - The ratio, either as a rational number or a named ratio, to use for spacing intervals at the maximum viewport width
 * @property {number} [spaceScale.viewportMin=320] - The width, in pixels, of the minimum viewport width the scale should be fluid within  
 * @property {number} [spaceScale.viewportMax=1500] - The width, in pixels, of the maximum viewport width the scale should be fluid within  
 * @property {object} [typeScale] - Parent object for type scale configuration
 * @property {number} [typeScale.steps=6] -The number of positive intervals, including the base size, for the type scale (two negative intervals added automatically)
 * @property {number} [typeScale.baseMin=16] - The base font size, in pixels, at the minimum viewport width  
 * @property {number} [typeScale.baseMax=18] - The base font size, in pixels, at the maximum viewport width  
 * @property {number|string} [typeScale.scaleMin=minor-third] - The ratio, either as a rational number or a named ratio, to use for font size intervals at the minimum viewport width  
 * @property {number|string} [typeScale.scaleMax=perfect-fourth] - The ratio, either as a rational number or a named ratio, to use for font size intervals at the maximum viewport width  
 * @property {number} [typeScale.viewportMin=320] - The width, in pixels, of the minimum viewport width the scale should be fluid within
 * @property {number} [typeScale.viewportMax=1500] - The width, in pixels, of the maximum viewport width the scale should be fluid within
 */

