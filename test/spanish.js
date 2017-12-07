const assert = require('assert')
const cleanchar = require('../index')
const text = `!¡?¿*'/AáàäâEèéêëIíìïîOòóöôUüùúû#\`/"<>$+@%=ñç`
const text2 = `aaaaaeeeeeiiiiiooooouuuuuñç`


describe('* Spanish test tests', () => {
  it('Clean all caracters exception: ñ and ç', () => {
    const res = cleanchar(text, { spanish: true })
    assert.deepStrictEqual(res, text2)
  })
})
