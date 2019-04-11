const tck = require('tck')
module.exports = (str, options) => {
  if (!str) return
  str = str.toLowerCase()

  const replaces = {
    '[<$+%>!¡`*‘’\'|{¿?“”=}/:\\/"]': '',
    '[\\s,&.]': '-',
    '[àáâãäå]': 'a',
    æ: 'ae',
    '[èéêë]': 'e',
    '[ìíîï]': 'i',
    '[òóôõö]': 'o',
    '[ùúûü]': 'u',
    '[ỳýŷÿ]': 'y',
    '-+': '-',
    '^-+': '',
    '-+$': ''
  }

  if (tck.isEmpty(options) || tck.isEmpty(options.spanish) || options.spanish === false) {
    replaces['ñ'] = 'n'
    replaces['ç'] = 'c'
  }

  if (tck.isEmpty(options) || tck.isEmpty(options.social) || options.social === false) {
    replaces['[#@]'] = ''
  }

  Object.keys(replaces).forEach(key => {
    str = str.replace(new RegExp(key, 'gi'), replaces[key])
  })

  return str.replace(new RegExp('-', 'gi'), ' ')
}
