const assert = require('assert')
const cleanchar = require('../index')
const text = `!¡?¿*'/AáàäâEèéêëIíìïîOòóöôUüùúû#\`/"<>$+@%=ñç`
const text2 = `aaaaaeeeeeiiiiiooooouuuuu#@nc`


describe('* Social tests', () => {
  it('Clean all characters social exception: # and @', () => {
    const res = cleanchar(text, { social: true })
    assert.deepStrictEqual(res, text2)
  })
})
