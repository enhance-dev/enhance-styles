import test from 'tape'
import customProperties from '../../properties/custom-properties.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.customProperies', t => {
  t.ok(
    customProperties({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--preferredInlineSize:52ch;--maxInlineSize:72ch;}'),
    'produces the expected custom properties'
  )
  t.end()
})
