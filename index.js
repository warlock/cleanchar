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

  if (undefined !== options && options.spanish !== undefined && options.spanish === false) {
    replaces["ñ"] = "n"
    replaces["ç"] = "c"
  }

  if (undefined !== options && options.social !== undefined && options.social === false) {
    replaces["[#@]"] = "-"
  }

  Object.keys(replaces).forEach(key => {
    str = str.replace(new RegExp(key, "gi"), replaces[key])
  })

  return str
}
