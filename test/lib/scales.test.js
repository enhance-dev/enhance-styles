import test from 'tape'

import {
  getRatioValue,
  ratios,
  roundToHundreths,
  generateClamp,
  generateScaleProperties,
  getScalePropertyNames,
  generateTypeScaleProperties,
  generateSpaceScaleProperties,
} from '../../lib/scales.mjs'

test('getRatioValue', t => {
  const num = 1.5
  const goodString = 'perfect-fifth'
  const badString = 'porfict-fufth'
  const numResult = getRatioValue(num, 'test')
  const stringResult = getRatioValue(goodString, 'test')
  const shouldThrow = () => getRatioValue(badString, 'test')

  const numExpected = num
  const stringExpected = ratios[goodString]

  t.equal(numResult, numExpected, 'returns the correct ratio value when passed a number')
  t.equal(stringResult, stringExpected, 'returns the correct ratio value when passed a named ratio')
  t.throws(shouldThrow, null, 'throws an error if passed a string not matching any named ratios')
  t.end()
})

test('roundToHundredths', t => {
  const input = [
    3.14159,
    3.799,
    3.40
  ]

  const expected = [
    3.14,
    3.8,
    3.4
  ]

  const result = input.map(n => roundToHundreths(n))

  t.deepEqual(result, expected, 'rounds to the nearest hundredths decimal place')
  t.end()
})

test('generateClamp', t => {
  const clampResult = generateClamp({ baseMinPx: 16, baseMaxPx: 20, viewportMinPx: 320, viewportMaxPx: 1500 })
  const expectedResult = 'clamp(1rem, 0.93rem + 0.34vw, 1.25rem)'

  t.equal(clampResult, expectedResult, 'generates the expected clamp value')
  t.end()
})

test('generateScaleProperties', t => {
  const testPrefix = 'test'
  const testSteps = [-2, -1, 0, 1, 2]
  const result = generateScaleProperties({
    prefix: testPrefix,
    stepsArray: testSteps,
    baseMin: 16,
    baseMax: 20,
    viewportMin: 320,
    viewportMax: 1500,
    scaleMin: 1.2,
    scaleMax: 1.333,
  })

  // Expected output via https://fluid-design-system.netlify.app/generate/320/16/minor-third/1500/20/perfect-fourth
  const expected = `--test--2: clamp(0.69rem, 0.69rem + 0.01vw, 0.7rem);
--test--1: clamp(0.83rem, 0.8rem + 0.14vw, 0.94rem);
--test-0: clamp(1rem, 0.93rem + 0.34vw, 1.25rem);
--test-1: clamp(1.2rem, 1.07rem + 0.63vw, 1.67rem);
--test-2: clamp(1.44rem, 1.23rem + 1.06vw, 2.22rem);`

  t.equal(result.trim(), expected.trim(), 'returns the expected custom properties for a fluid scale')
  t.end()
})

test('getScalePropertyNames', t => {
  const properties = generateScaleProperties({
    prefix: 'test',
    stepsArray: [-2, -1, 0, 1, 2],
    baseMin: 16,
    baseMax: 20,
    viewportMin: 320,
    viewportMax: 1500,
    scaleMin: 1.2,
    scaleMax: 1.333
  })

  const result = getScalePropertyNames(properties)

  const expected = [
    '--test--2',
    '--test--1',
    '--test-0',
    '--test-1',
    '--test-2'
  ]

  t.deepEqual(result, expected, 'returns the expected list of property names')
  t.end()
})

test('generateTypeScaleProperties', t => {
  const steps = 4
  const properties = generateTypeScaleProperties({ steps })
  const propertyNames = getScalePropertyNames(properties)
  const negatives = propertyNames.filter(p => p.includes('text--'))
  const basePlusPositives = propertyNames.filter(p => !p.includes('text--'))

  t.equal(propertyNames.length, steps + 2, 'produces the expected number of custom properties')
  t.equal(negatives.length, 2, 'includes two negative intervals')
  t.equal(basePlusPositives.length, steps, 'includes one base interval plus the expected number of positive intervals')
  t.end()
})

test('generateSpaceScaleProperties', t => {
  const steps = 4
  const properties = generateSpaceScaleProperties({ steps })
  const propertyNames = getScalePropertyNames(properties)

  const expectedPropertiesLength = steps * 2 - 1 // One base interval plus a symmetrical set of negative and positive intervals

  const negatives = propertyNames.filter(p => p.includes('space--'))
  const positives = propertyNames.filter(p => !p.includes('space--') && !p.includes('0'))
  const isSymmetrical = [
    negatives.length,
    positives.length,
  ].every(n => n === steps - 1)

  t.equal(propertyNames.length, expectedPropertiesLength, 'produces the expected number of custom properties')
  t.ok(isSymmetrical, 'produces a symmetrical set of negative and positive intervals')
  t.end()
})
