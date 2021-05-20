'use strict'

import REGULAR_STR from '../shareted/common/regular'

function toString(s) {
  if (typeof s === 'number') {
    s += ''
  }
  return s
}

// 验证是否是正确的手机号
function verifyPhoneErr(phone) {
  phone = toString(phone)
  const result = REGULAR_STR.shareted_common_regular_phone_mobile_china.test(phone)
  if (!result) {
    return '手机号错误'
  }
  return null
}

// 验证是否是正确的设备号，规则：15位数字的组合
function verifyDeviceCodeErr(str) {
  str = toString(str)
  const result = REGULAR_STR.shareted_common_regular_devicecode.test(str)
  if (!result) {
    return '设备编号应该是15位的数字组合'
  }
  return null
}
// 验证是否在范围内的数字
function verifyNumberRangeErr(str) {
  const result = REGULAR_STR.shareted_common_regular_range_number.test(str)
  console.log(result)
  if (!result) {
    return '工单提交最少图片数必须在9-20之间的整数'
  }
  return null
}

// 验证是否是正确的手机号，规则：2-20位字母和数字的组合
function verifyUsernameErr(str) {
  str = toString(str)
  const result = REGULAR_STR.shareted_common_regular_username.test(str)
  if (!result) {
    return '用户名应该是2-20位的数字字母组合'
  }
  return null
}

// 验证是否是正确的密码，规则：6-20位字母和数字的组合
function verifyPasswordErr(psw) {
  psw = toString(psw)
  const result = REGULAR_STR.shareted_common_regular_password.test(psw)
  if (!result) {
    return '密码应该是6-20位的数字字母组合'
  }
  return null
}

// 验证是否是正确的金额
function verifyMoneyErr(money) {
  money = toString(money)
  const result = REGULAR_STR.shareted_common_regular_currency_pnumber_decimals2.test(money)
  if (!result) {
    return '请输入正确的金额，两位小数'
  }
  return null
}
// 验证是否是正确图片地址
function verifyPictureErr(picture) {
  picture = toString(picture)
  const result = REGULAR_STR.shareted_common_regular_url_img.test(picture)
  if (!result) {
    return false
  }
  return true
}
// 验证是否是正确的url地址
function verifyUrlErr(url) {
  var temp_url = toString(url)
  const result = REGULAR_STR.shareted_common_regular_url.test(temp_url)
  if (!result) {
    return false
  }
  return true
}
// 验证是否是正确的url地址
function verifyMemoErr(memo) {
  const result = REGULAR_STR.shareted_common_regular_memo.test(memo)
  if (!result) {
    return false
  }
  return true
}

export default {
  verifyPhoneErr,
  verifyUsernameErr,
  verifyPasswordErr,
  verifyMoneyErr,
  verifyDeviceCodeErr,
  verifyNumberRangeErr,
  verifyPictureErr,
  verifyUrlErr,
  verifyMemoErr
}
