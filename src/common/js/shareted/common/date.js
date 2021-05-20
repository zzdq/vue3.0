export function shareted_common_date_get_date(date) {
  if (date == undefined || date == '') {
    return new Date()
  } else if (typeof (date) === 'string') {
    return new Date(date.replace(/-/g, '/'))
  } else {
    return new Date(date)
  }
}

export function shareted_common_date_get_yyyyMMdd(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate())
  }
}

export function shareted_common_date_get_yyyyMM(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1))
  }
}

export function shareted_common_date_get_yyyy(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear()
  }
}

export function shareted_common_date_get_yyyyMMddHHmmss(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) + ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds())
  }
}

export function shareted_common_date_get_yyyyMMddHHmmss_simple(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + '' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + '' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) + '' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds())
  }
}

export function shareted_common_date_get_yyyyMMddHH(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours())
  }
}

export function shareted_common_date_get_HHmmss(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) + ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds())
  }
}

export function shareted_common_date_get_HHmm(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes())
  }
}

export function shareted_common_date_get_yyyyMMddHHmm(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes())
  }
}

export function shareted_common_date_get_yyyyMMddHHMMssfff(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) + ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()) + ':' + (date.getMilliseconds() < 100 ? (date.getMilliseconds() < 10 ? '00' + date.getMilliseconds() : '0' + date.getMilliseconds()) : date.getMilliseconds())
  }
}

export function shareted_common_date_get_HHMMssfff(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds()
  }
}

export function shareted_common_date_get_week_start(date, start) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (undefined == start) {
      start = 0
    }
    start = start % 7

    for (var _int_rank = 0; _int_rank < 7; _int_rank++) {
      if (shareted_common_date_get_date(date.getTime() - 1000 * 60 * 60 * 24 * _int_rank).getDay() == start) {
        return shareted_common_date_get_date(date.getTime() - 1000 * 60 * 60 * 24 * _int_rank)
      }
    }
  }
}

export function shareted_common_date_get_week_end(date, start) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (undefined == start) {
      start = 0
    }

    for (var _int_rank = 1; _int_rank <= 7; _int_rank++) {
      if (shareted_common_date_get_date(date.getTime() + 1000 * 60 * 60 * 24 * _int_rank).getDay() == start) {
        return shareted_common_date_get_date(date.getTime() + 1000 * 60 * 60 * 24 * (_int_rank - 1))
      }
    }
  }
}

export function shareted_common_date_get_month_start(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    for (var _int_rank = 1; _int_rank < 32; _int_rank++) {
      if (shareted_common_date_get_date(date.getTime() - 1000 * 60 * 60 * 24 * _int_rank).getMonth() != date.getMonth()) {
        return shareted_common_date_get_date(date.getTime() - 1000 * 60 * 60 * 24 * (_int_rank - 1))
      }
    }
  }
}

export function shareted_common_date_get_month_end(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    for (var _int_rank = 1; _int_rank <= 31; _int_rank++) {
      if (shareted_common_date_get_date(date.getTime() + 1000 * 60 * 60 * 24 * _int_rank).getMonth() != date.getMonth()) {
        return shareted_common_date_get_date(date.getTime() + 1000 * 60 * 60 * 24 * (_int_rank - 1))
      }
    }
  }
}

export function shareted_common_date_get_quarter_start(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (date.getMonth() >= 0 && date.getMonth() <= 2) {
      return shareted_common_date_get_date(date.getFullYear() + '-01-01')
    } else if (date.getMonth() >= 3 && date.getMonth() <= 5) {
      return shareted_common_date_get_date(date.getFullYear() + '-04-01')
    } else if (date.getMonth() >= 6 && date.getMonth() <= 8) {
      return shareted_common_date_get_date(date.getFullYear() + '-07-01')
    } else {
      return shareted_common_date_get_date(date.getFullYear() + '-10-01')
    }
  }
}

export function shareted_common_date_get_quarter_end(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (date.getMonth() >= 0 && date.getMonth() <= 2) {
      return shareted_common_date_get_date(date.getFullYear() + '-03-31')
    } else if (date.getMonth() >= 3 && date.getMonth() <= 5) {
      return shareted_common_date_get_date(date.getFullYear() + '-06-30')
    } else if (date.getMonth() >= 6 && date.getMonth() <= 8) {
      return shareted_common_date_get_date(date.getFullYear() + '-09-30')
    } else {
      return shareted_common_date_get_date(date.getFullYear() + '-12-31')
    }
  }
}

export function shareted_common_date_get_half_year_start(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (date.getMonth() >= 0 && date.getMonth() <= 6) {
      return shareted_common_date_get_date(date.getFullYear() + '-01-01')
    } else {
      return shareted_common_date_get_date(date.getFullYear() + '-07-01')
    }
  }
}

export function shareted_common_date_get_half_year_end(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    if (date.getMonth() >= 0 && date.getMonth() <= 6) {
      return shareted_common_date_get_date(date.getFullYear() + '-06-30')
    } else {
      return shareted_common_date_get_date(date.getFullYear() + '-12-31')
    }
  }
}

export function shareted_common_date_get_year_start(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return shareted_common_date_get_date(date.getFullYear() + '-01-01')
  }
}

export function shareted_common_date_get_year_end(date) {
  if (date === null || date + '' == 'NaN-NaN-NaN NaN:NaN:NaN') {
    return ''
  } else {
    return shareted_common_date_get_date(date.getFullYear() + '-12-31')
  }
}

export function shareted_common_date_is_weekday(date) {
  return date.getDay() != 0 && date.getDay() != 6
}

export function shareted_common_date_add(date, type, count) {
  var _date_temp = shareted_common_date_get_date(date)

  switch (type) {
    case 'year':
    {
      _date_temp.setFullYear(_date_temp.getFullYear() + count)
      return _date_temp
      break
    }
    case 'quarter':
    {
      _date_temp.setMonth(_date_temp.getMonth() + count * 3)
      return _date_temp
      break
    }
    case 'month':
    {
      _date_temp.setMonth(_date_temp.getMonth() + count)
      return _date_temp
      break
    }
    case 'week':
    {
      _date_temp.setDate(_date_temp.getDate() + count * 7)
      return _date_temp
      break
    }
    case 'day':
    {
      _date_temp.setDate(_date_temp.getDate() + count)
      return _date_temp
      break
    }
    case 'hour':
    {
      _date_temp.setHours(_date_temp.getHours() + count)
      return _date_temp
      break
    }
    case 'minute':
    {
      _date_temp.setMinutes(_date_temp.getMinutes() + count)
      return _date_temp
      break
    }
    case 'second':
    {
      _date_temp.setSeconds(_date_temp.getSeconds() + count)
      return _date_temp
      break
    }
    default:
    {
      _date_temp.setDate(d.getDate() + count)
      return _date_temp
      break
    }
  }
}

export default {
  shareted_common_date_get_yyyyMMddHHmmss,
  shareted_common_date_get_yyyyMMddHHmm,
  shareted_common_date_get_yyyyMMdd,
  shareted_common_date_get_yyyyMM,
  shareted_common_date_get_date,
  shareted_common_date_get_HHmmss
}
