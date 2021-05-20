/** 设置cookie * */
function shareted_common_cookie_set(c_name, value, domain, expiredays) {
  document.cookie = c_name + '=' + escape(value) + '; path=/'
}

/** 获取cookie * */
function shareted_common_cookie_get(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + '=')
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      var c_end = document.cookie.indexOf(';', c_start)
      if (c_end == -1) { c_end = document.cookie.length }
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}

// 删除cookie中指定变量函数
function shareted_common_cookie_del(name) {
  var myDate = shareted_common_date_get_date()
  myDate.setTime(-1000)// 设置时间
  document.cookie = name + '="";expires=' + myDate.toGMTString() + '; path=/'
}

function shareted_common_cookie_wechat_del(name) {
  document.cookie = name + '=""; expires=Thu, 01 Jan 1970 00:00:01 GMT' + '; path=/'
}

/** 删除cookie * */
// 删除cookie中所有定变量函数
function shareted_common_cookie_del_all() {
  var myDate = shareted_common_date_get_date()
  myDate.setTime(-1000)// 设置时间
  var data = document.cookie
  var dataArray = data.split('; ')
  for (var i = 0; i < dataArray.length; i++) {
    var varName = dataArray[i].split('=')
    document.cookie = varName[0] + '=""; expires=' + myDate.toGMTString()
  }
}
