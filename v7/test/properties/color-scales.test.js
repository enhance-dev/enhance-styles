import test from 'tape'
import colorScales from '../../properties/color-scales.mjs'
import config from '../fixtures/styleguide.mjs'

const expectedMinified = `
:root {
  --red100: hsl(0, 100%, 90%);
  --red200: hsl(0, 100%, 80%);
  --red300: hsl(0, 100%, 70%);
  --red400: hsl(0, 100%, 60%);
  --red500: hsl(0, 100%, 50%);
  --red600: hsl(0, 100%, 40%);
  --red700: hsl(0, 100%, 30%);
  --red800: hsl(0, 100%, 20%);
  --red900: hsl(0, 100%, 10%);
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

