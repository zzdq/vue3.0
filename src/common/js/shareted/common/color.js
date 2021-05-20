var shareted_common_color_reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/

/* RGB颜色转换为16进制 */

String.prototype.shareted_common_color_to_hex = function() {
  var that = this
  if (/^(rgb|RGB)/.test(that)) {
    var aColor = that.replace(/(?:||rgb|RGB)*/g, '').replace('(', '').replace(')', '').split(',')
    var strHex = '#'
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16)
      if (hex === '0') {
        hex += hex
      }
      strHex += hex
    }
    if (strHex.length !== 7) {
      strHex = that
    }
    return strHex
  } else if (shareted_common_color_reg.test(that)) {
    var aNum = that.replace(/#/, '').split('')
    if (aNum.length === 6) {
      return that
    } else if (aNum.length === 3) {
      var numHex = '#'
      for (var i = 0; i < aNum.length; i += 1) {
        numHex += (aNum[i] + aNum[i])
      }
      return numHex
    }
  } else {
    return that
  }
}

// -------------------------------------------------

/* 16进制颜色转为RGB格式 */
String.prototype.shareted_common_color_to_rgb = function() {
  var sColor = this.toLowerCase()
  if (sColor && shareted_common_color_reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    var sColorChange = []
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return 'RGB(' + sColorChange.join(',') + ')'
  } else {
    return sColor
  }
}

function shareted_common_color_complementary_get(sInput, sOpt, bNoSharp) {
  if (!sInput) sInput = '#000000'
  if (!sOpt) sOpt = 'hex'
  sOpt = sOpt.toLowerCase()

  var arCell = []
  var arHex = []
  var arHexFinal = []
  var arInt = []
  var arIntFinal = []

  sInput = sInput.replace(/#/g, '')

  switch (sOpt) {
    case 'rgb':
      break

    default:

      if (sInput.length == 3) {
        var arTemp = fStringToArray(sInput)
        sInput = '' + arTemp[0] + arTemp[0] + arTemp[1] + arTemp[1] + arTemp[2] + arTemp[2]
      }

      if (sInput.length == 6) {
        arCell = fStringToArray(sInput)

        arHex[0] = '0x' + arCell[0] + arCell[1]
        arHex[1] = '0x' + arCell[2] + arCell[3]
        arHex[2] = '0x' + arCell[4] + arCell[5]

        arInt[0] = parseInt(arHex[0], 16)
        arInt[1] = parseInt(arHex[1], 16)
        arInt[2] = parseInt(arHex[2], 16)

        arIntFinal[0] = Math.abs(255 - arInt[0])
        arIntFinal[1] = Math.abs(255 - arInt[1])
        arIntFinal[2] = Math.abs(255 - arInt[2])

        arHexFinal[0] = fPadStr(arIntFinal[0].toString(16)).toUpperCase()
        arHexFinal[1] = fPadStr(arIntFinal[1].toString(16)).toUpperCase()
        arHexFinal[2] = fPadStr(arIntFinal[2].toString(16)).toUpperCase()

        if (bNoSharp) return arHexFinal.join('')

        return '#' + arHexFinal.join('')
      } else {
        alert('无法识别的十六进制颜色代码!')
      }
      break
  }
  return '000000'

  function fStringToArray(sInput) {
    var arCell = []
    var iCount = 0
    var iLen = sInput.length
    while (iCount < iLen) {
      arCell[iCount] = sInput.charAt(iCount)
      iCount++
    }

    return arCell
  }

  function fPadStr(sSrc, sPad, nLen) {
    if (!sSrc) return false
    if (!sPad) sPad = '0'
    if (!nLen) nLen = 2
    sSrc += ''
    if (sSrc.length >= nLen) return sSrc
    sPad = new Array(nLen + 1).join(sPad)
    var re = new RegExp('.*(.{' + (nLen) + '})$')
    return (sPad + sSrc).replace(re, '$1')
  }
}

function fRndCor(under, over, bNoPadSymbol) { // shawl.qiu code
  if (arguments.length == 1) {
    var over = under
    under = 0
  } else if (arguments.length == 0) {
    var under = 0
    var over = 255
  } // end if

  var r = fRandomBy(under, over).toString(16)
  r = fStrPadStr(r, r, 2)
  var g = fRandomBy(under, over).toString(16)
  g = fStrPadStr(g, g, 2)
  var b = fRandomBy(under, over).toString(16)
  b = fStrPadStr(b, b, 2)
  // defaultStatus=r+' '+g+' '+b
  if (bNoPadSymbol) return ('' + r + g + b).toUpperCase()
  return '#' + (r + g + b).toUpperCase() + ';'

  function fRandomBy(under, over) { // shawl.qiu code
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * under + 1)
      case 2:
        return parseInt(Math.random() * (over - under + 1) + under)
      default:
        return 0
    } // end switch
  } // end function fRandomBy

  function fStrPadStr(sSrc, sPad, nLen) {
    if (!sSrc) return false
    if (!sPad) sPad = '0'
    if (!nLen) nLen = 2
    sSrc += ''
    if (sSrc.length >= nLen) return sSrc
    sPad = new Array(nLen + 1).join(sPad)
    var re = new RegExp('.*(.{' + (nLen) + '})$')
    return (sPad + sSrc).replace(re, '$1')
  } // end function fStrPadStr
}
