import test from 'tape'

import reset from '../reset.mjs'

const optOut = {
  reset: false
}

test('reset', t => {
  t.notEqual(reset(), '', 'should emit reset styles by default')
  t.equal(reset({ config: optOut }), '', 'should return an empty string when `config.reset` is `false`')
  t.end()
})
