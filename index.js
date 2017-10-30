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

  if (undefined === options) {
    if (undefined === options.spanish || options.spanish !== true) {
      replaces["ñ"] = "n"
      replaces["ç"] = "c"
    }

    if (undefined === options.social || options.social !== true) {
      replaces["[#@]"] = ""
    }
  }

  Object.keys(replaces).forEach(key => {
    str = str.replace(new RegExp(key, "gi"), replaces[key])
  })

  return str.replace(new RegExp("-", "gi"), ' ')
}
