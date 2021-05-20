var shareted_common_character_chinese_char = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
var shareted_common_character_chinese_section_char = ['', '万', '亿', '万亿', '亿亿']
var shareted_common_character_chinese_unit_char = ['', '十', '百', '千']

function shareted_common_character_number_to_chinese(input) {
  var unitPos = 0
  var strIns = ''; var chnStr = ''
  var needZero = false

  if (input === 0) {
    return shareted_common_character_chinese_char[0]
  }

  while (input > 0) {
    var section = input % 10000
    if (needZero) {
      chnStr = shareted_common_character_chinese_char[0] + chnStr
    }
    strIns = shareted_common_character_number_section_to_chinese(section)
    strIns += (section !== 0) ? shareted_common_character_chinese_section_char[unitPos] : shareted_common_character_chinese_section_char[0]
    chnStr = strIns + chnStr
    needZero = (section < 1000) && (section > 0)
    input = Math.floor(input / 10000)
    unitPos++
  }

  if (chnStr.indexOf('一十') == 0) {
    chnStr = chnStr.substring(1)
  }

  return chnStr
}

function shareted_common_character_number_section_to_chinese(input) {
  var strIns = ''; var chnStr = ''
  var unitPos = 0
  var zero = true
  while (input > 0) {
    var v = input % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        chnStr = shareted_common_character_chinese_char[v] + chnStr
      }
    } else {
      zero = false
      strIns = shareted_common_character_chinese_char[v]
      strIns += shareted_common_character_chinese_unit_char[unitPos]
      chnStr = strIns + chnStr
    }
    unitPos++
    input = Math.floor(input / 10)
  }
  return chnStr
}

var shareted_common_character_number_char = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}
var shareted_common_character_number_value = {
  十: { value: 10, is_unit: false },
  百: { value: 100, is_unit: false },
  千: { value: 1000, is_unit: false },
  万: { value: 10000, is_unit: true },
  亿: { value: 100000000, is_unit: true }
}

function shareted_common_character_chinese_to_number(input) {
  var rtn = 0
  var section = 0
  var number = 0
  var is_unit = false
  var str = input.split('')

  for (var i = 0; i < str.length; i++) {
    var num = shareted_common_character_number_char[str[i]]
    if (typeof num !== 'undefined') {
      number = num
      if (i === str.length - 1) {
        section += number
      }
    } else {
      var unit = shareted_common_character_number_value[str[i]].value
      is_unit = shareted_common_character_number_value[str[i]].is_unit
      if (is_unit) {
        section = (section + number) * unit
        rtn += section
        section = 0
      } else {
        section += (number * unit)
      }
      number = 0
    }
  }
  return rtn + section
}

function shareted_common_character_money_to_chinese(input) {
  var tmp3 = 0
  var tmp1 = 0
  var tmp2 = 0
  if (Number(input) - Math.floor(Number(input) / 10) == 0) {
    tmp3 += 1
  }
  if (Math.floor(Number(input) * 10) - Math.floor(Number(input)) * 10 == 0) {
    tmp1 += 0.1
  }
  if (Math.floor(Number(input) * 100) - Math.floor(Number(input * 10)) * 10 == 0) {
    tmp2 += 0.01
  }
  input = Number(input) + tmp3 + tmp1 + tmp2

  var capUnit = ['万', '亿', '万', '圆', '']
  var capDigit = { 2: ['角', '分', ''], 4: ['仟', '佰', '拾', ''] }
  var capNum = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  if (((input.toString()).indexOf('.') > 16) || (isNaN(input))) { return '' }
  input = (Math.round(input * 100) / 100).toString()
  input = ((Math.pow(10, 19 - input.length)).toString()).substring(1) + input
  var i; var ret; var j; var nodeNum; var k; var subret; var len; var subChr; var CurChr = []
  for (i = 0, ret = ''; i < 5; i++, j = i * 4 + Math.floor(i / 4)) {
    nodeNum = input.substring(j, j + 4)
    for (k = 0, subret = '', len = nodeNum.length; ((k < len) && (parseInt(nodeNum.substring(k)) != 0)); k++) {
      CurChr[k % 2] = capNum[nodeNum.charAt(k)] + ((nodeNum.charAt(k) == 0) ? '' : capDigit[len][k])
      if (!((CurChr[0] == CurChr[1]) && (CurChr[0] == capNum[0]))) {
        if (!((CurChr[k % 2] == capNum[0]) && (subret == '') && (ret == ''))) { subret += CurChr[k % 2] }
      }
    }
    subChr = subret + ((subret == '') ? '' : capUnit[i])
    if (!((subChr == capNum[0]) && (ret == ''))) { ret += subChr }
  }
  ret = (ret == '') ? capNum[0] + capUnit[3] : ret

  if (tmp3 == 1) {
    ret = ret.replace('壹圆', '圆')
  }
  if (tmp1 == 0.1) {
    ret = ret.replace('壹角', '')
  }
  if (tmp2 == 0.01) {
    ret = ret.replace('壹分', '')
  }
  ret = ret.replace('零圆', '圆')
  if (ret.indexOf('圆') == 0) {
    ret = ret.substring(1)
  }
  if (ret == '') {
    ret = '零圆'
  }
  if (ret.indexOf('分') < 0) {
    ret += '整'
  }
  return ret
}
