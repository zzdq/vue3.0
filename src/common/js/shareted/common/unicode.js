function shareted_common_unicode_encode(input, ignore_letter) {
  var character = input.split('')
  var unicode = ''
  for (var i = 0; i < character.length; i++) {
    var code = Number(character[i].charCodeAt(0))
    if (!((undefined == ignore_letter || ignore_letter == null) ? false : ignore_letter) || code > 127) {
      var charAscii = code.toString(16)
      charAscii = new String('0000').substring(charAscii.length, 4) + charAscii
      unicode += '\\u' + charAscii
    } else {
      unicode += character[i]
    }
  }

  return unicode
}

function shareted_common_unicode_decode(input) {
  var character = input.split('\\u')
  var native1 = character[0]
  for (var i = 1; i < character.length; i++) {
    var code = character[i]
    native1 += String.fromCharCode(parseInt('0x' + code.substring(0, 4)))
    if (code.length > 4) {
      native1 += code.substring(4, code.length)
    }
  }

  return native1
}
