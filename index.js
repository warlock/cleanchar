module.exports = (str, options) => {
  if (!str) return

  str = str.toLowerCase()

  const replaces = {
    "[<$+%>!`*‘|{?“=}/:\\/]": "",
    "[\\s#,@&]": "-",
    "[àáâãäå]": "a",
    æ: "ae",
    ç: "c",
    "[èéêë]": "e",
    "[ìíîï]": "i",
    "[òóôõö]": "o",
    "[ùúûü]": "u",
    "[ýÿ]": "y",
    "-+": "-",
    "^-+": "",
    "-+$": ""
  }

  if (undefined !== options && options.spanish !== undefined && options.spanish === "off") {
    replaces["ñ"] = "n"
    replaces["ç"] = "c"
  }

  Object.keys(replaces).forEach(key => {
    str = str.replace(new RegExp(key, "gi"), replaces[key])
  })

  return str
}
