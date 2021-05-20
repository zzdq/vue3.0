function shareted_common_ascii_encode(input) {
  var ascii = ''
  for (var i = 0; i < input.length; i++) { ascii += '&#' + input.charCodeAt(i) + ';' }

  return ascii
}

function shareted_common_ascii_decode(input) {
  var code = input.match(/&#(\d+);/g)
  if (code == null) {
    return ''
  }

  var native = ''
  for (var i = 0; i < code.length; i++) { native += String.fromCharCode(code[i].replace(/[&#;]/g, '')) }
  return native
}
