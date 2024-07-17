import test from 'tape'
import borderRadius from '../../properties/border-radius.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.borders.radii', t => {
  t.ok(
    borderRadius({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--borderRadius0:2px;--borderRadius1:9999em;}'),
    'produces the expected border radii'
  )
  t.end()
})

