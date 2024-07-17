import test from 'tape'
import colorScales from '../../properties/color-scales.mjs'
import config from '../fixtures/styleguide.mjs'

const expectedMinified = `
:root {
  --gray100: hsl(0, 0%, 90%);
  --gray200: hsl(0, 0%, 80%);
  --gray300: hsl(0, 0%, 70%);
  --gray400: hsl(0, 0%, 60%);
  --gray500: hsl(0, 0%, 50.2%);
  --gray600: hsl(0, 0%, 40%);
  --gray700: hsl(0, 0%, 30%);
  --gray800: hsl(0, 0%, 20%);
  --gray900: hsl(0, 0%, 10%);
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

