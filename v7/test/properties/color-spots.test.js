import test from 'tape'
import colorSpots from '../../properties/color-spots.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.color.spots', t => {
  t.ok(
    colorSpots({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--rebeccaPurple:#663399;}'),
    'produces the expected spot colors'
  )
  t.end()
})
