import test from 'tape'

import fontSize from '../font-size.mjs'

const stateWithNoTypeScale = {
  config: {
    typeScale: {}
  }
}

const stateWithTypeScale = {
  config: {
    typeScale: {
      steps: 8,
    }
  }
}

test('fontSize', t => {
  const noTypeScaleResult = fontSize(stateWithNoTypeScale)
  const noTypeScaleExpected = `
/*** Font Sizes ***/
.text-2{font-size:var(--text--2);}
.text-1{font-size:var(--text--1);}
.text0{font-size:var(--text-0);}
.text1{font-size:var(--text-1);}
.text2{font-size:var(--text-2);}
.text3{font-size:var(--text-3);}
.text4{font-size:var(--text-4);}
.text5{font-size:var(--text-5);}
`

  const typeScaleResult = fontSize(stateWithTypeScale)
  const typeScaleExpected = `
/*** Font Sizes ***/
.text-2{font-size:var(--text--2);}
.text-1{font-size:var(--text--1);}
.text0{font-size:var(--text-0);}
.text1{font-size:var(--text-1);}
.text2{font-size:var(--text-2);}
.text3{font-size:var(--text-3);}
.text4{font-size:var(--text-4);}
.text5{font-size:var(--text-5);}
.text6{font-size:var(--text-6);}
.text7{font-size:var(--text-7);}
`

  t.equal(noTypeScaleResult, noTypeScaleExpected, 'returns the default classes if no type config is provided')
  t.equal(typeScaleResult, typeScaleExpected, 'returns the expected classes if a type config is provided')
  t.end()
})
