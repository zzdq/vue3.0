function shareted_common_herf_param_get(param) {
  if (param == undefined) {
    var url = window.location.href

    if (url.indexOf('?') >= 0) {
      var _arr_params = url.substring(url.indexOf('?') + 1).split('&')

      var param = {}
      if (_arr_params.length > 0) {
        for (var key in _arr_params) {
          if (_arr_params[key] != '') {
            var _arr_param = _arr_params[key].split('=')

            if (_arr_param.length > 0 && _arr_param[0] != '') {
              if (_arr_param.length == 1) {
                param[_arr_param[0]] = ''
              } else if (_arr_param.length == 2) {
                var _str_value = _arr_param[1]
                _str_value = _str_value.replace(/\+/g, ' ')

                while (shareted_common_url_decode(_str_value) != _str_value) {
                  _str_value = shareted_common_url_decode(_str_value)
                }

                param[_arr_param[0]] = _str_value
              }
            }
          }
        }
      }
    }

    return param
  } else {
    var reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
    return null
  }
}

function shareted_common_herf_domain_get(url) {
  var host = 'null'
  if (typeof url === 'undefined' || url == null) { url = window.location.href }
  var regex = /.*\:\/\/([^\/|:]*).*/
  var match = url.match(regex)
  if (typeof match !== 'undefined' && match != null) {
    host = match[1]
  }
  if (typeof host !== 'undefined' && host != null) {
    var strAry = host.split('.')
    if (strAry.length > 1) {
      host = strAry[strAry.length - 2] + '.' + strAry[strAry.length - 1]
    }
  }

  return host
}
