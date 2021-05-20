function shareted_common_password_check_strength(input, arr_key) {
  var strength = 0

  if (/\d/.test(input)) {
    strength++ // 数字
  }

  if (/[a-z]/.test(input)) {
    strength++ // 小写
  }

  if (/[A-Z]/.test(input)) {
    strength++ // 大写
  }

  if (/\W/.test(input)) {
    strength++ // 特殊字符
  }

  var reg = ''

  // 连续相同数字
  for (var rank = 0; rank < 10; rank++) {
    reg = rank + '+'

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }

  reg = '89?'
  for (var rank = 7; rank >= 0; rank--) {
    reg = rank + '(' + reg + ')?'
  }
  if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
    return 0
  }

  // 连续数字
  for (var start = 1; start < 10; start++) {
    reg = '90?'
    for (var rank = 8; rank >= start; rank--) {
      reg = rank + '(' + reg + ')?'
    }

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }

  // 连续相同字母
  for (var rank = 65; rank < 65 + 26; rank++) {
    reg = shareted_common_ascii_decode('&#' + rank + ';') + '+'

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }
  for (var rank = 97; rank < 97 + 26; rank++) {
    reg = shareted_common_ascii_decode('&#' + rank + ';') + '+'

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }

  // 连续字母
  for (var start = 65; start < 65 + 24; start++) {
    reg = 'YZ?'
    for (var rank = 65 + 23; rank >= start; rank--) {
      reg = shareted_common_ascii_decode('&#' + rank + ';') + '(' + reg + ')?'
    }

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }
  for (var start = 97; start < 97 + 24; start++) {
    reg = 'yz?'
    for (var rank = 97 + 23; rank >= start; rank--) {
      reg = shareted_common_ascii_decode('&#' + rank + ';') + '(' + reg + ')?'
    }

    if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
      return 0
    }
  }

  // 特殊单词
  reg = 'admin'
  reg += '|administator'
  reg += '|test'
  reg += '|guest'
  if (undefined != arr_key) {
    for (var rank in arr_key) {
      reg += '|' + arr_key[rank]
    }
  }
  if (new RegExp(reg).test(input) && input.replace(new RegExp(reg), '') == '') {
    return 0
  }

  return strength
}

function shareted_common_password_get(length, special) {
  var iteration = 0
  var password = ''
  var randomNumber
  if (special == undefined) {
    var special = false
  }
  while (iteration < length) {
    randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33
    if (!special) {
      if ((randomNumber >= 33) && (randomNumber <= 47)) {
        continue
      }
      if ((randomNumber >= 58) && (randomNumber <= 64)) {
        continue
      }
      if ((randomNumber >= 91) && (randomNumber <= 96)) {
        continue
      }
      if ((randomNumber >= 123) && (randomNumber <= 126)) {
        continue
      }
    }
    iteration++
    password += String.fromCharCode(randomNumber)
  }
  return password
}
