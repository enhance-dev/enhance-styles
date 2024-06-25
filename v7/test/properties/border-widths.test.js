import test from 'tape'
import borderWidths from '../../properties/border-widths.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.borders.widths', t => {
  t.ok(
    borderWidths({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--borderWidth-0:0.125em;--borderWidth-1:2px;}'),
    'produces the expected border widths'
  )
  t.end()
})


