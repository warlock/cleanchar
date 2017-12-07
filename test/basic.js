const assert = require('assert')
const cleanchar = require('../index')
const text = `!¡?¿*'/AáàäâEèéêëIíìïîOòóöôUüùúû#\`/"<>$+%=ñç`
const text2 = `aaaaaeeeeeiiiiiooooouuuuunc`


describe('* Basic tests', () => {
  it('Clean all characters', () => {
    const res = cleanchar(text)
    assert.deepStrictEqual(res, text2)
  })
})
