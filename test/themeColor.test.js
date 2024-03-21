import test from 'tape'

import themeColor from '../theme-color.mjs'

const noThemeColor = {
  theme: false,
  color: false,
}

const noTheme = {
  theme: false
}

const noColor = {
  color: false
}

test('themeColor', t => {
  t.equal(themeColor({ config: noThemeColor }), '', 'should emit an empty string when `config.theme` and `config.color` are both `false`')
  t.notOk(themeColor({ config: noTheme }).includes('/*** Theme Colors ***/'), 'should not includes theme colors when `config.theme` is `false`')
  t.notOk(themeColor({ config: noColor }).includes('/*** Spot Colors ***/'), 'should not includes theme colors when `config.color` is `false`')
  t.end()
})
