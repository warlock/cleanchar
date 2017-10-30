module.exports = (str, options) => {
  if (!str) return

  str = str.toLowerCase()

  const replaces = {
    "[<$+%>!¡`*‘’'|{¿?“”=}/:\\/]": "",
    "[\\s,&.]": "-",
    "[àáâãäå]": "a",
    æ: "ae",
    "[èéêë]": "e",
    "[ìíîï]": "i",
    "[òóôõö]": "o",
    "[ùúûü]": "u",
    "[ỳýŷÿ]": "y",
    "-+": "-",
    "^-+": "",
    "-+$": ""
  }

  if (undefined === options || undefined === options.social || options.spanish !== true) {
    replaces["ñ"] = "n"
    replaces["ç"] = "c"
  }

  if (undefined === options || undefined === options.social || options.social !== true) {
    console.log('social desactivat')
    replaces["[#@]"] = ""
  }

  Object.keys(replaces).forEach(key => {
    str = str.replace(new RegExp(key, "gi"), replaces[key])
  })

  return str
}
