function shareted_common_decimal_dec_to_bin(input, digit) {
  var data = parseInt(input, 10)

  if (data > 0) {
    if (digit != undefined || isNaN(digit)) {
      data = data.toString(2)

      while (data.length < digit) {
        data = '0' + data
      }

      return data
    } else {
      return data.toString(2)
    }
  } else {
    if (digit != undefined || isNaN(digit)) {
      data = (Math.abs(data) - 1).toString(2)
      while (data.length < digit - 1) {
        data = '0' + data
      }

      return '1' + data
    } else {
      return '1' + (Math.abs(data) - 1).toString(2)
    }
  }
}

function shareted_common_decimal_dec_to_hex(input) {
  var data = parseInt(input, 10)

  return data.toString(16)
}

function shareted_common_decimal_bin_to_dec(input, sign) {
  var data = input.toString()

  if (sign && data[0] != '0') {
    data = data.substring(1)

    var result = ''
    for (var rank = 0; rank < data.length; rank++) {
      if (data[rank] == 1) {
        result += '0'
      } else {
        result += '1'
      }
    }

    return -1 * (parseInt(result, 2) + 1)
  } else {
    data = parseInt(input, 2)

    return data
  }
}

function shareted_common_decimal_bin_to_hex(input, sign) {
  var data = shareted_common_decimal_bin_to_dec(input, sign)

  return data.toString(16)
}

function shareted_common_decimal_hex_to_dec(input) {
  return parseInt(input, 16)
}

function shareted_common_decimal_hex_to_bin(input, digit) {
  return shareted_common_decimal_dec_to_bin(shareted_common_decimal_hex_to_dec(input), digit)
}
