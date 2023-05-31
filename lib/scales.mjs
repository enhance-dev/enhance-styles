/*
 * Adapted from https://github.com/georgedoescode/fluid-design-system-on-demand-builders
 * …which in turn is based on https://utopia.fyi
 */

export const ratios = {
  'minor-second': 1.067,
  'major-second': 1.125,
  'minor-third': 1.2,
  'major-third': 1.25,
  'perfect-fourth': 1.333,
  'augmented-fourth': 1.414,
  'perfect-fifth': 1.5,
  'golden-ratio': 1.618,
  'major-sixth': 1.667,
  'minor-seventh': 1.778,
  'major-seventh': 1.875,
  octave: 2,
}

const defaultConfig = {
  steps: 6,
  viewportMin: 320,
  viewportMax: 1500,
  baseMin: 16,
  baseMax: 18,
  scaleMin: 'minor-third',
  scaleMax: 'perfect-fourth',
}

/**
 * @param {(string|number)} ratio - A named ratio or a rational number
 * @param {string} scaleProperty - The scale property the ratio value will be used for; used in error reporting only
 * @returns {number} The ratio value as a rational number
 */
export function getRatioValue(ratio, scaleProperty) {
  // Config provided a rational number for the ratio
  if (typeof ratio === 'number') return ratio

  // Config provided a named ratio
  if (ratios[ratio]) return ratios[ratio]

  // Sad trombone
  throw new Error(`Value provided for ${scaleProperty} must be a rational number or a named ratio: ${Object.keys(ratios).join(', ')}`)
}

// Rounds to the nearest 2 decimal places
// e.g. roundToHundredths(4.894) = 4.89
//      roundToHundredths(4.896) = 4.90
/**
 * @param {number} num - The number to apply rounding to
 * @returns {number} The supplied number rounded to the nearest hundredths decimal place
 */
export function roundToHundreths(num) {
  return Math.round(num * 100) / 100
}

/**
 * @param {Object} config - The configuration object
 * @param {number} config.baseMinPx - The base size, in pixels, at the minimum viewport width
 * @param {number} config.baseMaxPx - The base size, in pixels, at the maximum viewport width
 * @param {number} config.viewportMinPx - The width, in pixels, of the minimum viewport
 * @param {number} config.viewportMaxPx - The width, in pixels, of the maximum viewport
 * @returns {string} The CSS `clamp` value to be used
 */
export function generateClamp({
  baseMinPx,
  baseMaxPx,
  viewportMinPx,
  viewportMaxPx,
}) {
  const pixelsPerRem = 16

  const viewportMinRem = viewportMinPx / pixelsPerRem
  const viewportMaxRem = viewportMaxPx / pixelsPerRem

  const baseMinRem = baseMinPx / pixelsPerRem
  const baseMaxRem = baseMaxPx / pixelsPerRem

  const slope = (baseMaxRem - baseMinRem) / (viewportMaxRem - viewportMinRem)
  const yIntersection = -viewportMinRem * slope + baseMinRem

  const min = `${roundToHundreths(baseMinRem)}rem`
  const preferred = `${roundToHundreths(yIntersection)}rem + ${roundToHundreths(slope * 100)}vw`
  const max = `${roundToHundreths(baseMaxRem)}rem`

  return `clamp(${min}, ${preferred}, ${max})`
}

/**
 * Type and space scales differ in kind only by their custom property prefixes and the shape of their steps array.
 * This function does the majority of the work for generating the actual custom properties.
 * @param {Object} config - The configuration object
 * @param {string} config.prefix - The string to prefix custom property names with
 * @param {number[]} config.stepsArray - The list of steps on which to iterate
 * @param {number} config.baseMin - The base size, in pixels, at the minimum viewport width
 * @param {number} config.baseMax - The base size, in pixels, at the maximum viewport width
 * @param {number|string} config.scaleMin - The ratio, either as a rational number or a named ratio, to use at the minimum viewport width
 * @param {number|string} config.scaleMax - The ratio, either as a rational number or a named ratio, to use at the maximum viewport width
 * @param {number} config.viewportMin - The width, in pixels, of the minimum viewport
 * @param {number} config.viewportMax - The width, in pixels, of the maximum viewport
 * @returns {string} The CSS custom properties for the fluid scale
 */
export function generateScaleProperties({
  prefix,
  stepsArray,
  baseMin,
  baseMax,
  scaleMin,
  scaleMax,
  viewportMin,
  viewportMax,
}) {
  const scaleMinValue = getRatioValue(scaleMin, 'typeScale.scaleMin')
  const scaleMaxValue = getRatioValue(scaleMax, 'typeScale.scaleMax')

  const clampSteps = stepsArray.reduce((clampSteps, step) => {
    return [
      ...clampSteps,
      {[step]: generateClamp({
        baseMinPx: roundToHundreths(baseMin * Math.pow(scaleMinValue, step)),
        baseMaxPx: roundToHundreths(baseMax * Math.pow(scaleMaxValue, step)),
        viewportMinPx: viewportMin,
        viewportMaxPx: viewportMax,
      })}
    ]
  }, [])

  let css = ``

  clampSteps.forEach(step => {
    const [[k, v]] = Object.entries(step)
    css += `--${prefix}-${k}: ${v};\n`
  })

  return css
}

/**
 * @param {string} scaleOutput - The output from an invocation of `generateScaleProperties`
 * @returns {string[]} An array with each property name as an index
 */
export function getScalePropertyNames(scaleOutput) {
  const scalePropertyNames = scaleOutput
    .split('\n')
    .filter(p => p !== '') // remove output's final newline
    .map(p => p.substring(0, p.indexOf(':'))) // removes colon and property value

  return scalePropertyNames
}

/**
 * @param {Object} [config] - The configuration object
 * @param {number} [config.steps=6] - The number of positive intervals, including the base size, for the type scale (two negative intervals added automatically)
 * @param {number} [config.baseMin=16] - The base font size, in pixels, at the minimum viewport width
 * @param {number} [config.baseMax=18] - The base font size, in pixels, at the maximum viewport width
 * @param {number|string} [config.scaleMin=minor-third] - The ratio, either as a number or a named ratio, to use at the minimum viewport width
 * @param {number|string} [config.scaleMax=perfect-fourth] - The ratio, either as a number or a named ratio, to use at the maximum viewport width
 * @param {number} [config.viewportMin=320] - The width, in pixels, of the minimum viewport
 * @param {number} [config.viewportMax=1500] - The width, in pixels, of the maximum viewport
 * @returns {string} The CSS custom properties for the fluid type scale
 */
export function generateTypeScaleProperties({
  steps = defaultConfig.steps,
  baseMin = defaultConfig.baseMin,
  baseMax = defaultConfig.baseMax,
  scaleMin = defaultConfig.scaleMin,
  scaleMax = defaultConfig.scaleMax,
  viewportMin = defaultConfig.viewportMin,
  viewportMax = defaultConfig.viewportMax,
} = {}) {
  // Type scales do not have equivalent postive and negative intervals, as beyond a couple negative integers type becomes illegible
  const typeSteps = [
    -2,
    -1,
    ...Array(steps).keys()
  ]

  return generateScaleProperties({
    prefix: 'text',
    stepsArray: typeSteps,
    baseMin,
    baseMax,
    scaleMin,
    scaleMax,
    viewportMin,
    viewportMax,
  })
}

/**
 * @param {Object} [config] - The configuration object
 * @param {number} [config.steps=6] - The number of symmetrical intervals to create for the space scale, plus the base size
 * @param {number} [config.baseMin=16] - The base size, in pixels, at the minimum viewport width
 * @param {number} [config.baseMax=18] - The base size, in pixels, at the maximum viewport width
 * @param {number|string} [config.scaleMin=minor-third] - The ratio, either as a rational number or a named ratio, to use at the minimum viewport width
 * @param {number|string} [config.scaleMax=perfect-fourth] - The ratio, either as a rational number or a named ratio, to use at the maximum viewport width
 * @param {number} [config.viewportMin=320] - The width, in pixels, of the minimum viewport
 * @param {number} [config.viewportMax=1500] - The width, in pixels, of the maximum viewport
 * @returns {string} The CSS custom properties for the fluid space scale
 */
export function generateSpaceScaleProperties({
  steps = defaultConfig.steps,
  baseMin = defaultConfig.baseMin,
  baseMax = defaultConfig.baseMax,
  scaleMin = defaultConfig.scaleMin,
  scaleMax = defaultConfig.scaleMax,
  viewportMin = defaultConfig.viewportMin,
  viewportMax = defaultConfig.viewportMax,
} = {}) {
  // Space scales contain positive and negative intervals in equal measure, plus the base interval
  const basePlusPositives = [...Array(steps).keys()]
  const negatives = [...Array(steps).keys()]
    .filter(n => n !== 0)
    .map(n => -n)
    .reverse()

  const spaceSteps = [
    ...negatives,
    ...basePlusPositives
  ]

  return generateScaleProperties({
    prefix: 'space',
    stepsArray: spaceSteps,
    baseMin,
    baseMax,
    scaleMin,
    scaleMax,
    viewportMin,
    viewportMax,
  })
}

