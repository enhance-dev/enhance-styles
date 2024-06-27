import borderRadius from '../../properties/border-radius.mjs'
import config from '../fixtures/styleguide.mjs'
import getCustomProperties from '../../lib/getCustomProperties.mjs'
import test from 'tape'

test('getCustomProperties', t => {
  const radii = getCustomProperties(borderRadius({ config }))
  t.deepEqual(
    radii,
    ['--borderRadius-0', '--borderRadius-1'],
    'returns the expected array of custom property names'
  )
  t.end()
})
