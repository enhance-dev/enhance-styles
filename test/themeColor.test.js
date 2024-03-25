import test from 'tape'

import themeColor from '../theme-color.mjs'

const noTheme = {
  theme: false
}

const noColor = {
  color: {}
}

test('themeColor', t => {
  t.notOk(themeColor({ config: noTheme }).includes('/*** Theme Colors ***/'), 'should not include theme colors when `config.theme` is `false`')
  t.notOk(themeColor({ config: noColor }).includes('/*** Spot Colors ***/'), 'should not include spot colors when `config.color` is empty')
  t.end()
})
