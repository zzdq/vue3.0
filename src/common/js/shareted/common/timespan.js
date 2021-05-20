function shareted_common_timespan_get_ss(date) {
  if (undefined == date || date == '') {
    return null
  } else {
    return Math.floor(Date.parse(date) / 1000)
  }
}

function shareted_common_timespan_get_fff(date) {
  return Date.parse(date)
}

function shareted_common_timespan_get_from_date(start_date, end_date, cover) {
  return shareted_common_timespan_get_from_timespan(shareted_common_timespan_get_ss(end_date) - shareted_common_timespan_get_ss(start_date), cover)
}

function shareted_common_timespan_get_from_timespan(timespan, cover) {
  var result = ''

  var seconds = timespan % 60
  if (seconds > 0) {
    if ((undefined == cover || cover == null) ? false : cover) {
      if (seconds < 10) {
        result = '0' + seconds + '秒钟' + result
      } else {
        result = seconds + '秒钟' + result
      }
    } else {
      result = seconds + '秒钟' + result
    }
  }

  timespan = Math.floor(timespan / 60)
  var minutes = timespan % 60
  if (minutes > 0) {
    if ((undefined == cover || cover == null) ? false : cover) {
      if (minutes < 10) {
        result = '0' + minutes + '分钟' + result
      } else {
        result = minutes + '分钟' + result
      }
    } else {
      result = minutes + '分钟' + result
    }
  }

  timespan = Math.floor(timespan / 60)
  var hours = timespan % 24
  if (hours > 0) {
    if ((undefined == cover || cover == null) ? false : cover) {
      if (hours < 10) {
        result = '0' + hours + '小时' + result
      } else {
        result = hours + '小时' + result
      }
    } else {
      result = hours + '小时' + result
    }
  }

  var day = Math.floor(timespan / 24)
  if (day > 0) {
    result = day + '天' + result
  }

  if (result == '') {
    result = '0秒钟'
  }

  return result
}
