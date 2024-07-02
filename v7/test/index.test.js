import test from 'tape'
import validate from 'css-validator'

import config from './fixtures/styleguide.mjs'
import write from '../index.mjs'

test('the write function', t => {
  t.plan(1)

  validate({
    text: write(config),
    profile: 'css3svg',
  }, function(err, data) {
    t.ok(data.validity, 'should generate valid CSS')
  })
})
