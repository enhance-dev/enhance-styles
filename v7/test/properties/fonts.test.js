import test from 'tape'
import fonts from '../../properties/fonts.mjs'
import config from '../fixtures/styleguide.mjs'

test('config.fonts', t => {
  t.ok(
    fonts({ config })
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .includes(':root{--font-sans:Papyrus,ComicSans,sans-serif;--font-serif:Wingdings,serif;}'),
    'produces the expected font properties'
  )
  t.end()
})

