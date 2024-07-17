import test from 'tape'
import colorSpots from '../../properties/color-spots.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.color.spots', t => {
  t.ok(
    colorSpots({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--magenta:#ff0095;--p3magenta:color(display-p3100.58);}'), // trimmed spaces in color() aren't valid CSS but this works for testing purposes
    'produces the expected spot colors'
  )
  t.end()
})
