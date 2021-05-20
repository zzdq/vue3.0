// 链接地址
var shareted_common_regular_url = /(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/

// 图片链接
var shareted_common_regular_url_img = /(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/

// 邮箱地址
var shareted_common_regular_email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

// IP地址
var shareted_common_regular_ip = /\d+\.\d+\.\d+\.\d+/

// 中国手机号码
var shareted_common_regular_phone_mobile_china = /^(?:13\d|14\d|15\d|17\d|18\d|19\d)-?\d{5}(\d{3}|\*{3})$/

// 中国固定电话号码
var shareted_common_regular_phone_fixed = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/

// 中国电话号码（包括移动和固定电话）
var shareted_common_regular_phone_china = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/

// 中国邮政编码
var shareted_common_regular_postcode_china = /[1-9]{1}(\d+){5}/

// 中国身份证号码
var shareted_common_regular_id_china = /\d{18}|\d{15}/

// 整数
var shareted_common_regular_integer = /\d+/

// 浮点数（即小数）
var shareted_common_regular_float = /(-?\d*)\.?\d+/

// 任何数字
var shareted_common_regular_number = /(-?\d*)(\.\d+)?/

// 中文字符串
var shareted_common_regular_character_unicode = /[\u4e00-\u9fa5]*/

// 货币价格
var shareted_common_regular_currency = /^\d+(\.\d{1,2})?$/i

// 货币价格,大于0
var shareted_common_regular_currency_pnumber = /^[1-9]\d*(\.\d+)?$/

// 货币价格,大于0,两位小数
var shareted_common_regular_currency_pnumber_decimals2 = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/

// 正整数
var shareted_common_regular_integer_pnumber = /^[0-9]*[1-9][0-9]*$/

// 设备号
var shareted_common_regular_devicecode = /^[0-9]{15}$/

// 范围内的整数
var shareted_common_regular_range_number = /^\d{9,20}$/

// 用户名
var shareted_common_regular_username = /^[a-zA-Z0-9]{2,20}$/

// 密码
var shareted_common_regular_password = /^[a-zA-Z0-9]{6,20}$/

// 网址
var shareted_common_regular_url = /^[a-zA-z]+:\/\/[^\s]*/
// 中文、字母、数字、中英文逗号分号、空格
var shareted_common_regular_memo = /^[\u4e00-\u9fa5_a-zA-Z0-9,，、；;.。\s]+$/

module.exports = {
  shareted_common_regular_username,
  shareted_common_regular_password,
  shareted_common_regular_phone_mobile_china,
  shareted_common_regular_currency_pnumber,
  shareted_common_regular_currency_pnumber_decimals2,
  shareted_common_regular_devicecode,
  shareted_common_regular_range_number,
  shareted_common_regular_url_img,
  shareted_common_regular_url,
  shareted_common_regular_memo
}
