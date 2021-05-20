function shareted_common_periodic_text_get(rule) {
  var _str_text = ''

  // #region day
  if (rule.day != undefined && !shareted_common_json_is_empty_object(rule.day)) {
    // #region daily
    if (rule.day.daily != undefined && !shareted_common_json_is_empty_object(rule.day.daily)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.day.daily.frequency != undefined && !isNaN(rule.day.daily.frequency) && rule.day.daily.frequency != 1) {
        _str_text += rule.day.daily.frequency
      }
      _str_text += '天'
    }
    // #endregion

    // #region weekday
    if (rule.day.weekday != undefined) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '工作日'
    }
    // #endregion
  }
  // #endregion

  // #region week
  if (rule.week != undefined && !shareted_common_json_is_empty_object(rule.week) && (rule.week.sunday || rule.week.monday || rule.week.tuesday || rule.week.wednesday || rule.week.thursday || rule.week.friday || rule.week.saturday)) {
    if (_str_text != '') {
      _str_text += ';'
    }

    _str_text += '每'
    if (rule.week.frequency != undefined && !isNaN(rule.week.frequency) && rule.week.frequency != 1) {
      _str_text += rule.week.frequency
    }
    _str_text += '周的'

    // #region week
    if (rule.week.sunday) {
      _str_text += '星期天'

      if (rule.week.monday || rule.week.tuesday || rule.week.wednesday || rule.week.thursday || rule.week.friday || rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.monday) {
      _str_text += '星期一'

      if (rule.week.tuesday || rule.week.wednesday || rule.week.thursday || rule.week.friday || rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.tuesday) {
      _str_text += '星期二'

      if (rule.week.wednesday || rule.week.thursday || rule.week.friday || rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.wednesday) {
      _str_text += '星期三'

      if (rule.week.thursday || rule.week.friday || rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.thursday) {
      _str_text += '星期四'

      if (rule.week.friday || rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.friday) {
      _str_text += '星期五'

      if (rule.week.saturday) {
        _str_text += '，'
      }
    }
    if (rule.week.saturday) {
      _str_text += '星期六'
    }
    // #endregion
  }
  // #endregion

  // #region month
  if (rule.month != undefined && !shareted_common_json_is_empty_object(rule.month)) {
    // #region day
    if (rule.month.day != undefined && !shareted_common_json_is_empty_object(rule.month.day) && rule.month.day.day != undefined && !isNaN(rule.month.day.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.month.day.frequency != undefined && !isNaN(rule.month.day.frequency) && rule.month.day.frequency != 1) {
        _str_text += rule.month.day.frequency
      }
      _str_text += '个月的'

      _str_text += '第' + rule.month.day.day + '天'
    }
    // #endregion

    // #region rday
    if (rule.month.rday != undefined && !shareted_common_json_is_empty_object(rule.month.rday) && rule.month.rday.day != undefined && !isNaN(rule.month.rday.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.month.rday.frequency != undefined && !isNaN(rule.month.rday.frequency) && rule.month.rday.frequency != 1) {
        _str_text += rule.month.rday.frequency
      }
      _str_text += '个月的'

      if (rule.month.rday.day == 1) {
        _str_text += '最后一'
      } else {
        _str_text += '倒第' + rule.month.rday.day
      }
      _str_text += '天'
    }
    // #endregion

    // #region week
    if (rule.month.week != undefined && !shareted_common_json_is_empty_object(rule.month.week) && (rule.month.week.sunday || rule.month.week.monday || rule.month.week.tuesday || rule.month.week.wednesday || rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.month.week.frequency != undefined && !isNaN(rule.month.week.frequency) && rule.month.week.frequency != 1) {
        _str_text += rule.month.week.frequency
      }
      _str_text += '个月的'

      if (rule.month.week.week == 1) {
        _str_text += '第一个'
      } else if (rule.month.week.week == 2) {
        _str_text += '第二个'
      } else if (rule.month.week.week == 3) {
        _str_text += '第三个'
      } else if (rule.month.week.week == 4) {
        _str_text += '第四个'
      } else if (rule.month.week.week == 5) {
        _str_text += '第五个（不存在则取第四个）'
      } else if (rule.month.week.week == -1) {
        _str_text += '最后一个'
      } else if (rule.month.week.week == -2) {
        _str_text += '倒数第二个'
      } else if (rule.month.week.week == -3) {
        _str_text += '倒数第三个'
      } else if (rule.month.week.week == -4) {
        _str_text += '倒数第四个'
      } else if (rule.month.week.week == -5) {
        _str_text += '倒数第五个（不存在则取倒数第四个）'
      } else {
        _str_text += '第一个'
      }

      // #region week
      if (rule.month.week.sunday) {
        _str_text += '星期天'

        if (rule.month.week.monday || rule.month.week.tuesday || rule.month.week.wednesday || rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.monday) {
        _str_text += '星期一'

        if (rule.month.week.tuesday || rule.month.week.wednesday || rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.tuesday) {
        _str_text += '星期二'

        if (rule.month.week.wednesday || rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.wednesday) {
        _str_text += '星期三'

        if (rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.thursday) {
        _str_text += '星期四'

        if (rule.month.week.friday || rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.friday) {
        _str_text += '星期五'

        if (rule.month.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.month.week.saturday) {
        _str_text += '星期六'
      }
      // #endregion
    }
    // #endregion
  }
  // #endregion

  // #region year
  if (rule.year != undefined && !shareted_common_json_is_empty_object(rule.year)) {
    // #region day
    if (rule.year.day != undefined && !shareted_common_json_is_empty_object(rule.year.day) && rule.year.day.month != undefined && !isNaN(rule.year.day.month) && rule.year.day.day != undefined && !isNaN(rule.year.day.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.day.frequency != undefined && !isNaN(rule.year.day.frequency) && rule.year.day.frequency != 1) {
        _str_text += rule.year.day.frequency
      }
      _str_text += '年'

      if (rule.year.day.month == 1) {
        _str_text += '一'
      } else if (rule.year.day.month == 2) {
        _str_text += '二'
      } else if (rule.year.day.month == 3) {
        _str_text += '三'
      } else if (rule.year.day.month == 4) {
        _str_text += '四'
      } else if (rule.year.day.month == 5) {
        _str_text += '五'
      } else if (rule.year.day.month == 6) {
        _str_text += '六'
      } else if (rule.year.day.month == 7) {
        _str_text += '七'
      } else if (rule.year.day.month == 8) {
        _str_text += '八'
      } else if (rule.year.day.month == 9) {
        _str_text += '九'
      } else if (rule.year.day.month == 10) {
        _str_text += '十'
      } else if (rule.year.day.month == 11) {
        _str_text += '十一'
      } else if (rule.year.day.month == 12) {
        _str_text += '十二'
      }
      _str_text += '月的'

      _str_text += '第' + rule.year.day.day + '天'
    }
    // #endregion

    // #region rday
    if (rule.year.rday != undefined && !shareted_common_json_is_empty_object(rule.year.rday) && rule.year.rday.month != undefined && !isNaN(rule.year.rday.month) && rule.year.rday.day != undefined && !isNaN(rule.year.rday.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.rday.frequency != undefined && !isNaN(rule.year.rday.frequency) && rule.year.rday.frequency != 1) {
        _str_text += rule.year.rday.frequency
      }
      _str_text += '年'

      if (rule.year.rday.month == 1) {
        _str_text += '一'
      } else if (rule.year.rday.month == 2) {
        _str_text += '二'
      } else if (rule.year.rday.month == 3) {
        _str_text += '三'
      } else if (rule.year.rday.month == 4) {
        _str_text += '四'
      } else if (rule.year.rday.month == 5) {
        _str_text += '五'
      } else if (rule.year.rday.month == 6) {
        _str_text += '六'
      } else if (rule.year.rday.month == 7) {
        _str_text += '七'
      } else if (rule.year.rday.month == 8) {
        _str_text += '八'
      } else if (rule.year.rday.month == 9) {
        _str_text += '九'
      } else if (rule.year.rday.month == 10) {
        _str_text += '十'
      } else if (rule.year.rday.month == 11) {
        _str_text += '十一'
      } else if (rule.year.rday.month == 12) {
        _str_text += '十二'
      }
      _str_text += '月的'

      if (rule.year.rday.day == 1) {
        _str_text += '最后一'
      } else {
        _str_text += '倒数第' + rule.year.rday.day
      }
      _str_text += '天'
    }
    // #endregion

    // #region days
    if (rule.year.days != undefined && !shareted_common_json_is_empty_object(rule.year.days) && rule.year.days.day != undefined && !isNaN(rule.year.days.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.days.frequency != undefined && !isNaN(rule.year.days.frequency) && rule.year.days.frequency != 1) {
        _str_text += rule.year.days.frequency
      }
      _str_text += '年的'

      _str_text += '第' + rule.year.days.day + '天'
    }
    // #endregion

    // #region rdays
    if (rule.year.rdays != undefined && !shareted_common_json_is_empty_object(rule.year.rdays) && rule.year.rdays.day != undefined && !isNaN(rule.year.rdays.day)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.rdays.frequency != undefined && !isNaN(rule.year.rdays.frequency) && rule.year.rdays.frequency != 1) {
        _str_text += rule.year.rdays.frequency
      }
      _str_text += '年的'

      if (rule.year.rdays.day == 1) {
        _str_text += '最后一'
      } else {
        _str_text += '倒数第' + rule.year.rdays.day
      }
      _str_text += '天'
    }
    // #endregion

    // #region week
    if (rule.year.week != undefined && !shareted_common_json_is_empty_object(rule.year.week) && rule.year.week.month != undefined && !isNaN(rule.year.week.month) && (rule.year.week.sunday || rule.year.week.monday || rule.year.week.tuesday || rule.year.week.wednesday || rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.week.frequency != undefined && !isNaN(rule.year.week.frequency) && rule.year.week.frequency != 1) {
        _str_text += rule.year.week.frequency
      }
      _str_text += '年'

      if (rule.year.week.month == 1) {
        _str_text += '一'
      } else if (rule.year.week.month == 2) {
        _str_text += '二'
      } else if (rule.year.week.month == 3) {
        _str_text += '三'
      } else if (rule.year.week.month == 4) {
        _str_text += '四'
      } else if (rule.year.week.month == 5) {
        _str_text += '五'
      } else if (rule.year.week.month == 6) {
        _str_text += '六'
      } else if (rule.year.week.month == 7) {
        _str_text += '七'
      } else if (rule.year.week.month == 8) {
        _str_text += '八'
      } else if (rule.year.week.month == 9) {
        _str_text += '九'
      } else if (rule.year.week.month == 10) {
        _str_text += '十'
      } else if (rule.year.week.month == 11) {
        _str_text += '十一'
      } else if (rule.year.week.month == 12) {
        _str_text += '十二'
      }
      _str_text += '月的'

      if (rule.year.week.week == 1) {
        _str_text += '第一个'
      } else if (rule.year.week.week == 2) {
        _str_text += '第二个'
      } else if (rule.year.week.week == 3) {
        _str_text += '第三个'
      } else if (rule.year.week.week == 4) {
        _str_text += '第四个'
      } else if (rule.year.week.week == 5) {
        _str_text += '第五个（不存在则取第四个）'
      } else if (rule.year.week.week == -1) {
        _str_text += '最后一个'
      } else if (rule.year.week.week == -2) {
        _str_text += '倒数第二个'
      } else if (rule.year.week.week == -3) {
        _str_text += '倒数第三个'
      } else if (rule.year.week.week == -4) {
        _str_text += '倒数第四个'
      } else if (rule.year.week.week == -5) {
        _str_text += '倒数第五个（不存在则取倒数第四个）'
      } else {
        _str_text += '第一个'
      }

      // #region week
      if (rule.year.week.sunday) {
        _str_text += '星期天'

        if (rule.year.week.monday || rule.year.week.tuesday || rule.year.week.wednesday || rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.monday) {
        _str_text += '星期一'

        if (rule.year.week.tuesday || rule.year.week.wednesday || rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.tuesday) {
        _str_text += '星期二'

        if (rule.year.week.wednesday || rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.wednesday) {
        _str_text += '星期三'

        if (rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.thursday) {
        _str_text += '星期四'

        if (rule.year.week.friday || rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.friday) {
        _str_text += '星期五'

        if (rule.year.week.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.week.saturday) {
        _str_text += '星期六'
      }
      // #endregion
    }
    // #endregion

    // #region weeks
    if (rule.year.weeks != undefined && !shareted_common_json_is_empty_object(rule.year.weeks) && rule.year.weeks.week != undefined && !isNaN(rule.year.weeks.week) && (rule.year.weeks.sunday || rule.year.weeks.monday || rule.year.weeks.tuesday || rule.year.weeks.wednesday || rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.weeks.frequency != undefined && !isNaN(rule.year.weeks.frequency) && rule.year.weeks.frequency != 1) {
        _str_text += rule.year.weeks.frequency
      }
      _str_text += '年的'

      _str_text += '第' + rule.year.weeks.week + '个'

      // #region week
      if (rule.year.weeks.sunday) {
        _str_text += '星期天'

        if (rule.year.weeks.monday || rule.year.weeks.tuesday || rule.year.weeks.wednesday || rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.monday) {
        _str_text += '星期一'

        if (rule.year.weeks.tuesday || rule.year.weeks.wednesday || rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.tuesday) {
        _str_text += '星期二'

        if (rule.year.weeks.wednesday || rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.wednesday) {
        _str_text += '星期三'

        if (rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.thursday) {
        _str_text += '星期四'

        if (rule.year.weeks.friday || rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.friday) {
        _str_text += '星期五'

        if (rule.year.weeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.weeks.saturday) {
        _str_text += '星期六'
      }
      // #endregion
    }
    // #endregion

    // #region rweeks
    if (rule.year.rweeks != undefined && !shareted_common_json_is_empty_object(rule.year.rweeks) && rule.year.rweeks.week != undefined && !isNaN(rule.year.rweeks.week) && (rule.year.rweeks.sunday || rule.year.rweeks.monday || rule.year.rweeks.tuesday || rule.year.rweeks.wednesday || rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday)) {
      if (_str_text != '') {
        _str_text += ';'
      }

      _str_text += '每'
      if (rule.year.rweeks.frequency != undefined && !isNaN(rule.year.rweeks.frequency) && rule.year.rweeks.frequency != 1) {
        _str_text += rule.year.rweeks.frequency
      }
      _str_text += '年的'

      if (rule.year.rweeks.week == 1) {
        _str_text += '最后一'
      } else {
        _str_text += '倒数第' + rule.year.rweeks.week
      }
      _str_text += '个'

      // #region week
      if (rule.year.rweeks.sunday) {
        _str_text += '星期天'

        if (rule.year.rweeks.monday || rule.year.rweeks.tuesday || rule.year.rweeks.wednesday || rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.monday) {
        _str_text += '星期一'

        if (rule.year.rweeks.tuesday || rule.year.rweeks.wednesday || rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.tuesday) {
        _str_text += '星期二'

        if (rule.year.rweeks.wednesday || rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.wednesday) {
        _str_text += '星期三'

        if (rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.thursday) {
        _str_text += '星期四'

        if (rule.year.rweeks.friday || rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.friday) {
        _str_text += '星期五'

        if (rule.year.rweeks.saturday) {
          _str_text += '，'
        }
      }
      if (rule.year.rweeks.saturday) {
        _str_text += '星期六'
      }
      // #endregion
    }
    // #endregion
  }
  // #endregion

  return _str_text
}

function shareted_common_periodic_next_date_get(rule, date) {
  if (rule == undefined) {
    return ''
  }

  date = shareted_common_date_get_date(shareted_common_date_get_yyyyMMdd(shareted_common_date_get_date(date)))

  var _date_next

  // #region day
  if (rule.day != undefined && !shareted_common_json_is_empty_object(rule.day)) {
    // #region daily
    if (rule.day.daily != undefined && !shareted_common_json_is_empty_object(rule.day.daily)) {
      var _date_next_temp

      if (rule.day.daily.frequency != undefined && !isNaN(rule.day.daily.frequency) && rule.day.daily.frequency != 1) {
        _date_next_temp = shareted_common_date_add(date, 'day', Number(rule.day.daily.frequency))
      } else {
        _date_next_temp = shareted_common_date_add(date, 'day', 1)
      }

      if (_date_next == undefined) {
        _date_next = _date_next_temp
      } else if (_date_next.getTime() > _date_next_temp.getTime()) {
        _date_next = _date_next_temp
      }
    }
    // #endregion

    // #region weekday
    if (rule.day.weekday != undefined) {
      var _date_next_temp = shareted_common_date_add(date, 'day', 1)

      while (!shareted_common_date_is_weekday(_date_next_temp)) {
        _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1)
      }

      if (_date_next == undefined) {
        _date_next = _date_next_temp
      } else if (_date_next.getTime() > _date_next_temp.getTime()) {
        _date_next = _date_next_temp
      }
    }
    // #endregion
  }
  // #endregion

  // #region week
  if (rule.week != undefined && !shareted_common_json_is_empty_object(rule.week) && (rule.week.sunday || rule.week.monday || rule.week.tuesday || rule.week.wednesday || rule.week.thursday || rule.week.friday || rule.week.saturday)) {
    var _date_next_temp

    // #region week
    if (rule.week.sunday && date.getDay() < 0) {
      _date_next_temp = shareted_common_date_add(date, 'day', 0 - date.getDay())
    } else if (rule.week.monday && date.getDay() < 1) {
      _date_next_temp = shareted_common_date_add(date, 'day', 1 - date.getDay())
    } else if (rule.week.tuesday && date.getDay() < 2) {
      _date_next_temp = shareted_common_date_add(date, 'day', 2 - date.getDay())
    } else if (rule.week.wednesday && date.getDay() < 3) {
      _date_next_temp = shareted_common_date_add(date, 'day', 3 - date.getDay())
    } else if (rule.week.thursday && date.getDay() < 4) {
      _date_next_temp = shareted_common_date_add(date, 'day', 4 - date.getDay())
    } else if (rule.week.friday && date.getDay() < 5) {
      _date_next_temp = shareted_common_date_add(date, 'day', 5 - date.getDay())
    } else if (rule.week.saturday && date.getDay() < 6) {
      _date_next_temp = shareted_common_date_add(date, 'day', 6 - date.getDay())
    }
    // #endregion

    if (_date_next_temp != undefined) {
      if (_date_next == undefined) {
        _date_next = _date_next_temp
      } else if (_date_next.getTime() > _date_next_temp.getTime()) {
        _date_next = _date_next_temp
      }
    } else {
      var _date_temp = shareted_common_date_get_week_start(date)

      if (rule.week.frequency != undefined && !isNaN(rule.week.frequency) && rule.week.frequency != 1) {
        _date_temp = shareted_common_date_add(_date_temp, 'week', Number(rule.week.frequency))
      } else {
        _date_temp = shareted_common_date_add(_date_temp, 'week', 1)
      }

      // #region week
      if (rule.week.sunday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 0)
      } else if (rule.week.monday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 1)
      } else if (rule.week.tuesday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 2)
      } else if (rule.week.wednesday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 3)
      } else if (rule.week.thursday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 4)
      } else if (rule.week.friday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 5)
      } else if (rule.week.saturday) {
        _date_next_temp = shareted_common_date_add(_date_temp, 'day', 6)
      }
      // #endregion

      if (_date_next_temp != undefined) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
  }
  // #endregion

  // #region month
  if (rule.month != undefined && !shareted_common_json_is_empty_object(rule.month)) {
    // #region day
    if (rule.month.day != undefined && !shareted_common_json_is_empty_object(rule.month.day) && rule.month.day.day != undefined && !isNaN(rule.month.day.day)) {
      var _date_next_temp

      if (Number(rule.month.day.day) > date.getDate()) {
        if (Number(rule.month.day.day) >= shareted_common_date_get_month_end(date).getDate()) {
          _date_next_temp = shareted_common_date_get_month_end(date)
        } else {
          _date_next_temp = shareted_common_date_add(date, 'day', Number(rule.month.day.day) - date.getDate())
        }

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        _date_next_temp = shareted_common_date_get_month_start(date)

        if (rule.month.day.frequency != undefined && !isNaN(rule.month.day.frequency) && rule.month.day.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.month.day.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', 1)
        }

        if (Number(rule.month.day.day) >= shareted_common_date_get_month_end(_date_next_temp).getDate()) {
          _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', Number(rule.month.day.day) - 1)
        }

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region rday
    if (rule.month.rday != undefined && !shareted_common_json_is_empty_object(rule.month.rday) && rule.month.rday.day != undefined && !isNaN(rule.month.rday.day)) {
      var _date_next_temp

      if (Number(rule.month.rday.day) < shareted_common_date_get_month_end(date).getDate() - date.getDate()) {
        _date_next_temp = shareted_common_date_add(shareted_common_date_get_month_end(date), 'day', 1 - Number(rule.month.rday.day))

        if (_date_next_temp != undefined) {
          if (_date_next == undefined) {
            _date_next = _date_next_temp
          } else if (_date_next.getTime() > _date_next_temp.getTime()) {
            _date_next = _date_next_temp
          }
        }
      } else {
        _date_next_temp = shareted_common_date_get_month_start(date)

        if (rule.month.rday.frequency != undefined && !isNaN(rule.month.rday.frequency) && rule.month.rday.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.month.rday.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', 1)
        }
        _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)

        if (_date_next_temp.getDate() < rule.month.rday.day) {
          _date_next_temp = shareted_common_date_get_month_start(_date_next_temp)
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1 - Number(rule.month.rday.day))
        }

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region week
    if (rule.month.week != undefined && !shareted_common_json_is_empty_object(rule.month.week) && (rule.month.week.sunday || rule.month.week.monday || rule.month.week.tuesday || rule.month.week.wednesday || rule.month.week.thursday || rule.month.week.friday || rule.month.week.saturday)) {
      var _date_next_temp

      var _date_week_start = shareted_common_date_get_month_start(date)
      var _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

      if (rule.month.week.week == 1) {
      } else if (rule.month.week.week == 2) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 1)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.month.week.week == 3) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 2)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.month.week.week == 4) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 3)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.month.week.week == 5) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 4)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.month.week.week == -1) {
        _date_week_end = shareted_common_date_get_month_end(_date_week_start)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.month.week.week == -2) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -1)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.month.week.week == -3) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -2)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.month.week.week == -4) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -3)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.month.week.week == -5) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -4)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else {
      }

      // #region week
      if (rule.month.week.sunday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.monday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.tuesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.wednesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.thursday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.friday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.month.week.saturday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      // #endregion

      if (_date_next_temp != undefined) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        _date_week_start = shareted_common_date_get_month_start(date)
        if (rule.month.week.frequency != undefined && !isNaN(rule.month.week.frequency) && rule.month.week.frequency != 1) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'month', Number(rule.month.week.frequency))
        } else {
          _date_week_start = shareted_common_date_add(_date_week_start, 'month', 1)
        }
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

        if (rule.month.week.week == 1) {
        } else if (rule.month.week.week == 2) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 1)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.month.week.week == 3) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 2)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.month.week.week == 4) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 3)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.month.week.week == 5) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 4)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.month.week.week == -1) {
          _date_week_end = shareted_common_date_get_month_end(_date_week_start)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.month.week.week == -2) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -1)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.month.week.week == -3) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -2)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.month.week.week == -4) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -3)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.month.week.week == -5) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -4)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else {
        }

        // #region week
        if (rule.month.week.sunday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.monday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.tuesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.wednesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.thursday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.friday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.month.week.saturday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        // #endregion

        if (_date_next_temp != undefined) {
          if (_date_next == undefined) {
            _date_next = _date_next_temp
          } else if (_date_next.getTime() > _date_next_temp.getTime()) {
            _date_next = _date_next_temp
          }
        }
      }
    }
    // #endregion
  }
  // #endregion

  // #region year
  if (rule.year != undefined && !shareted_common_json_is_empty_object(rule.year)) {
    // #region day
    if (rule.year.day != undefined && !shareted_common_json_is_empty_object(rule.year.day) && rule.year.day.month != undefined && !isNaN(rule.year.day.month) && rule.year.day.day != undefined && !isNaN(rule.year.day.day)) {
      var _date_next_temp = shareted_common_date_get_year_start(date)
      _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.year.day.month) - 1)
      if (shareted_common_date_get_month_end(_date_next_temp).getDate() > Number(rule.year.day.day)) {
        _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', Number(rule.year.day.day) - 1)
      } else {
        _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)
      }

      if (_date_next_temp.getTime() > date.getTime()) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        var _date_next_temp = shareted_common_date_get_year_start(date)

        if (rule.year.day.frequency != undefined && !isNaN(rule.year.day.frequency) && rule.year.day.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', Number(rule.year.day.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', 1)
        }

        _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.year.day.month) - 1)
        if (shareted_common_date_get_month_end(_date_next_temp).getDate() < Number(rule.year.day.day)) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', Number(rule.year.day.day) - 1)
        } else {
          _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)
        }

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region rday
    if (rule.year.rday != undefined && !shareted_common_json_is_empty_object(rule.year.rday) && rule.year.rday.month != undefined && !isNaN(rule.year.rday.month) && rule.year.rday.day != undefined && !isNaN(rule.year.rday.day)) {
      var _date_next_temp = shareted_common_date_get_year_start(date)
      _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.year.rday.month) - 1)
      _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)
      if (_date_next_temp.getDate() > Number(rule.year.rday.day)) {
        _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1 - Number(rule.year.rday.day))
      } else {
        _date_next_temp = shareted_common_date_get_month_start(_date_next_temp)
      }

      if (_date_next_temp.getTime() > date.getTime()) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        var _date_next_temp = shareted_common_date_get_year_start(date)

        if (rule.year.rday.frequency != undefined && !isNaN(rule.year.rday.frequency) && rule.year.rday.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', Number(rule.year.rday.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', 1)
        }

        _date_next_temp = shareted_common_date_add(_date_next_temp, 'month', Number(rule.year.rday.month) - 1)
        _date_next_temp = shareted_common_date_get_month_end(_date_next_temp)
        if (_date_next_temp.getDate() > Number(rule.year.rday.day)) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1 - Number(rule.year.rday.day))
        } else {
          _date_next_temp = shareted_common_date_get_month_start(_date_next_temp)
        }

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region days
    if (rule.year.days != undefined && !shareted_common_json_is_empty_object(rule.year.days) && rule.year.days.day != undefined && !isNaN(rule.year.days.day)) {
      var _date_next_temp = shareted_common_date_get_year_start(date)
      _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', Number(rule.year.days.day) - 1)

      if (_date_next_temp.getTime() > date.getTime()) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        var _date_next_temp = shareted_common_date_get_year_start(date)

        if (rule.year.days.frequency != undefined && !isNaN(rule.year.days.frequency) && rule.year.days.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', Number(rule.year.days.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', 1)
        }

        _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', Number(rule.year.days.day) - 1)

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region rdays
    if (rule.year.rdays != undefined && !shareted_common_json_is_empty_object(rule.year.rdays) && rule.year.rdays.day != undefined && !isNaN(rule.year.rdays.day)) {
      var _date_next_temp = shareted_common_date_get_year_end(date)
      _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1 - Number(rule.year.rdays.day))

      if (_date_next_temp.getTime() > date.getTime()) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        var _date_next_temp = shareted_common_date_get_year_start(date)

        if (rule.year.rdays.frequency != undefined && !isNaN(rule.year.rdays.frequency) && rule.year.rdays.frequency != 1) {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', Number(rule.year.rdays.frequency))
        } else {
          _date_next_temp = shareted_common_date_add(_date_next_temp, 'year', 1)
        }
        _date_next_temp = shareted_common_date_get_year_end(_date_next_temp)

        _date_next_temp = shareted_common_date_add(_date_next_temp, 'day', 1 - Number(rule.year.rdays.day))

        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      }
    }
    // #endregion

    // #region week
    if (rule.year.week != undefined && !shareted_common_json_is_empty_object(rule.year.week) && rule.year.week.month != undefined && !isNaN(rule.year.week.month) && (rule.year.week.sunday || rule.year.week.monday || rule.year.week.tuesday || rule.year.week.wednesday || rule.year.week.thursday || rule.year.week.friday || rule.year.week.saturday)) {
      var _date_next_temp

      var _date_week_start = shareted_common_date_get_year_start(date)
      _date_week_start = shareted_common_date_add(_date_week_start, 'month', Number(rule.year.week.month) - 1)
      var _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

      if (rule.year.week.week == 1) {
      } else if (rule.year.week.week == 2) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 1)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.year.week.week == 3) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 2)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.year.week.week == 4) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 3)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.year.week.week == 5) {
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', 4)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
      } else if (rule.year.week.week == -1) {
        _date_week_end = shareted_common_date_get_month_end(_date_week_start)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.year.week.week == -2) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -1)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.year.week.week == -3) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -2)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.year.week.week == -4) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -3)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else if (rule.year.week.week == -5) {
        _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -4)
        _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
      } else {
      }

      // #region week
      if (rule.year.week.sunday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.monday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.tuesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.wednesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.thursday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.friday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.week.saturday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      // #endregion

      if (_date_next_temp != undefined) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        _date_week_start = shareted_common_date_get_year_start(date)
        if (rule.year.week.frequency != undefined && !isNaN(rule.year.week.frequency) && rule.year.week.frequency != 1) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', Number(rule.year.week.frequency))
        } else {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', 1)
        }
        _date_week_start = shareted_common_date_add(_date_week_start, 'month', Number(rule.year.week.month) - 1)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

        if (rule.year.week.week == 1) {
        } else if (rule.year.week.week == 2) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 1)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.year.week.week == 3) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 2)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.year.week.week == 4) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 3)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.year.week.week == 5) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'week', 4)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else if (rule.year.week.week == -1) {
          _date_week_end = shareted_common_date_get_month_end(_date_week_start)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.year.week.week == -2) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -1)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.year.week.week == -3) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -2)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.year.week.week == -4) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -3)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else if (rule.year.week.week == -5) {
          _date_week_end = shareted_common_date_add(shareted_common_date_get_month_end(_date_week_start), 'week', -4)
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
        } else {
        }

        // #region week
        if (rule.year.week.sunday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.monday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.tuesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.wednesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.thursday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.friday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.week.saturday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        // #endregion

        if (_date_next_temp != undefined) {
          if (_date_next == undefined) {
            _date_next = _date_next_temp
          } else if (_date_next.getTime() > _date_next_temp.getTime()) {
            _date_next = _date_next_temp
          }
        }
      }
    }
    // #endregion

    // #region weeks
    if (rule.year.weeks != undefined && !shareted_common_json_is_empty_object(rule.year.weeks) && rule.year.weeks.week != undefined && !isNaN(rule.year.weeks.week) && (rule.year.weeks.sunday || rule.year.weeks.monday || rule.year.weeks.tuesday || rule.year.weeks.wednesday || rule.year.weeks.thursday || rule.year.weeks.friday || rule.year.weeks.saturday)) {
      var _date_next_temp

      var _date_week_start = shareted_common_date_get_year_start(date)
      _date_week_start = shareted_common_date_add(_date_week_start, 'week', rule.year.weeks.week - 1)
      var _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

      // #region week
      if (rule.year.weeks.sunday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.monday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.tuesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.wednesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.thursday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.friday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.weeks.saturday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      // #endregion

      if (_date_next_temp != undefined) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        _date_week_start = shareted_common_date_get_year_start(date)
        if (rule.year.weeks.frequency != undefined && !isNaN(rule.year.weeks.frequency) && rule.year.weeks.frequency != 1) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', Number(rule.year.weeks.frequency))
        } else {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', 1)
        }
        _date_week_start = shareted_common_date_add(_date_week_start, 'week', rule.year.weeks.week - 1)
        _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())

        // #region week
        if (rule.year.weeks.sunday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.monday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.tuesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.wednesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.thursday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.friday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.weeks.saturday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        // #endregion

        if (_date_next_temp != undefined) {
          if (_date_next == undefined) {
            _date_next = _date_next_temp
          } else if (_date_next.getTime() > _date_next_temp.getTime()) {
            _date_next = _date_next_temp
          }
        }
      }
    }
    // #endregion

    // #region rweeks
    if (rule.year.rweeks != undefined && !shareted_common_json_is_empty_object(rule.year.rweeks) && rule.year.rweeks.week != undefined && !isNaN(rule.year.rweeks.week) && (rule.year.rweeks.sunday || rule.year.rweeks.monday || rule.year.rweeks.tuesday || rule.year.rweeks.wednesday || rule.year.rweeks.thursday || rule.year.rweeks.friday || rule.year.rweeks.saturday)) {
      var _date_next_temp

      var _date_week_end = shareted_common_date_get_year_end(date)
      _date_week_end = shareted_common_date_add(_date_week_end, 'week', 1 - rule.year.rweeks.week)
      var _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)

      // #region week
      if (rule.year.rweeks.sunday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.monday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.tuesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.wednesday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.thursday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.friday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      if (rule.year.rweeks.saturday && date.getTime() < shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7).getTime()) {
        var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

        if (_date_next_temp == undefined) {
          _date_next_temp = _date_temp
        } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
          _date_next_temp = _date_temp
        }
      }
      // #endregion

      if (_date_next_temp != undefined) {
        if (_date_next == undefined) {
          _date_next = _date_next_temp
        } else if (_date_next.getTime() > _date_next_temp.getTime()) {
          _date_next = _date_next_temp
        }
      } else {
        _date_week_start = shareted_common_date_get_year_start(date)
        if (rule.year.rweeks.frequency != undefined && !isNaN(rule.year.rweeks.frequency) && rule.year.rweeks.frequency != 1) {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', Number(rule.year.rweeks.frequency))
        } else {
          _date_week_start = shareted_common_date_add(_date_week_start, 'year', 1)
        }

        _date_week_end = shareted_common_date_get_year_end(_date_week_start)
        _date_week_end = shareted_common_date_add(_date_week_end, 'week', 1 - rule.year.rweeks.week)
        if (_date_week_end.getYear() != _date_week_start.getYear()) {
          _date_week_start = shareted_common_date_get_year_start(_date_week_start)
          _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
        } else {
          _date_week_start = shareted_common_date_get_week_start(_date_week_end, _date_week_end.getDay() + 1)
          if (_date_week_end.getYear() != _date_week_start.getYear()) {
            _date_week_start = shareted_common_date_get_year_start(_date_week_end)
            _date_week_end = shareted_common_date_get_week_end(_date_week_start, _date_week_start.getDay())
          }
        }

        // #region week
        if (rule.year.rweeks.sunday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (7 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.monday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (8 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.tuesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (9 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.wednesday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (10 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.thursday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (11 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.friday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (12 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        if (rule.year.rweeks.saturday) {
          var _date_temp = shareted_common_date_add(_date_week_start, 'day', (13 - _date_week_start.getDay()) % 7)

          if (_date_next_temp == undefined) {
            _date_next_temp = _date_temp
          } else if (_date_temp.getTime() < _date_next_temp.getTime()) {
            _date_next_temp = _date_temp
          }
        }
        // #endregion

        if (_date_next_temp != undefined) {
          if (_date_next == undefined) {
            _date_next = _date_next_temp
          } else if (_date_next.getTime() > _date_next_temp.getTime()) {
            _date_next = _date_next_temp
          }
        }
      }
    }
    // #endregion
  }
  // #endregion

  return shareted_common_date_get_yyyyMMdd(_date_next)
}

function shareted_common_periodic_date_check(rule, date, start_date, count) {
  var _int_rank = 0

  if (rule == undefined) {
    return _int_rank
  }
  date = shareted_common_date_get_date(date)

  var _date_start = shareted_common_date_get_date(shareted_common_date_get_yyyyMMdd(shareted_common_date_get_date(start_date)))

  while (count == undefined || count == '' || isNaN(count) || _int_rank <= Number(count)) {
    var _date_temp = shareted_common_date_get_date(shareted_common_periodic_next_date_get(rule, _date_start))
    _int_rank++

    if (_date_temp.getTime() == date.getTime()) {
      break
    } else if (_date_temp.getTime() > date.getTime()) {
      _int_rank = 0
      break
    } else if (count != undefined && count != '' && !isNaN(count) && _int_rank >= Number(count)) {
      _int_rank = 0
      break
    }

    _date_start = _date_temp
  }

  return _int_rank
}
