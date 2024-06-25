import test from 'tape'
import colorScales from '../../properties/color-scales.mjs'
import config from '../fixtures/styleguide.mjs'

const expectedMinified = `
:root {
  --red-100: hsl(0, 100%, 90%);
  --red-200: hsl(0, 100%, 80%);
  --red-300: hsl(0, 100%, 70%);
  --red-400: hsl(0, 100%, 60%);
  --red-500: hsl(0, 100%, 50%);
  --red-600: hsl(0, 100%, 40%);
  --red-700: hsl(0, 100%, 30%);
  --red-800: hsl(0, 100%, 20%);
  --red-900: hsl(0, 100%, 10%);
}`.replaceAll(' ', '').replaceAll('\n', '')

test('config.color.scales', t => {
  t.ok(
    colorScales({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(expectedMinified),
    'produces the expected color scales'
  )
  t.end()
})

