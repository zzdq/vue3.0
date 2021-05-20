function shareted_common_utf8_encode(input) {
  return input.replace(/[^\u0000-\u00FF]/g, function(data) {
    return escape(data).replace(/(%u)(\w{4})/gi, '&#x$2;')
  })
}

function shareted_common_utf8_decode(input) {
  return unescape(input.replace(/&#x/g, '%u').replace(/;/g, ''))
}

function shareted_common_utf8_from_utf16(input) {
  var out, i, len, c
  out = ''
  len = input.length
  for (i = 0; i < len; i++) {
    c = input.charCodeAt(i)
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += input.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out
}
