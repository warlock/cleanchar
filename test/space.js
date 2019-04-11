const assert = require('assert')
const cleanchar = require('../index')
const text = `!¡?¿*'/AáàäâEèéêëIíìïîOòóöô  Uüùúû#\`/"<>$+@%=ñç`
const text2 = `aaaaaeeeeeiiiiiooooo uuuuuñç`

describe('* Space test tests', () => {
  it('Clean all caracters exception: ñ and ç', () => {
    const res = cleanchar(text, { spanish: true })
    assert.deepStrictEqual(res, text2)
  })
})
