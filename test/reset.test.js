import test from 'tape'

import reset from '../reset.mjs'

const config = {
  reset: false
}

test('reset', t => {
  t.equal(reset({ config }), '', 'should return an empty string when `config.reset` is `false`')
  t.end()
})
