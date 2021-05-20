function shareted_common_dialog_init() {
  for (var rank in $('.shareted-dialog')) {
    if (rank < $('.shareted-dialog').length) {
      $('.shareted-dialog')[rank].style.display = ''
    }
  }
}

function shareted_common_dialog_show(url, option, control) {
  if (control == undefined) {
    control = self
    while (control.location != top.location && control.parent.location != top.location) {
      control = control.parent
    }
    control.shareted_common_dialog_show(url, option, control)
  } else {
    var _int_timespan = (new Date()).getTime()

    var _ctl_dialog = document.createElement('div')
    _ctl_dialog.id = 'admin_temp_dialog_' + _int_timespan
    _ctl_dialog.classList.add('easyui-dialog')
    _ctl_dialog.style.borderRightWidth = '2px'

    // #region iframe
    var _ctl_iframe = document.createElement('iframe')
    _ctl_iframe.id = 'admin_temp_iframe_' + _int_timespan
    _ctl_iframe.setAttribute('scrolling', 'auto')
    _ctl_iframe.setAttribute('frameborder', '0')
    _ctl_iframe.style.width = '100%'
    _ctl_iframe.style.height = '100%'
    _ctl_iframe.src = url

    if (!0) { // if not IE
      _ctl_iframe.onload = function() {
        if (option.afterLoad != undefined) {
          option.afterLoad(_ctl_dialog.id, _ctl_iframe)
        }
      }
    } else {
      _ctl_iframe.onreadystatechange = function() {
        if (_ctl_iframe.readyState == 'complete') {
          if (option.afterLoad != undefined) {
            option.afterLoad(_ctl_dialog.id, _ctl_iframe)
          }
        }
      }
    }
    _ctl_dialog.appendChild(_ctl_iframe)
    // #endregion

    document.body.appendChild(_ctl_dialog)

    if (option.closed == undefined) {
      option.closed = true
    }
    if (option.modal == undefined) {
      option.modal = true
    }

    if (option.width == undefined) {
      option.width = true
    }
    if (option.modal == undefined) {
      option.modal = true
    }

    option.onClose = function() {
      if (option.beforeClose != undefined) {
        option.beforeClose(_ctl_dialog.id, _ctl_iframe)
      }

      shareted_common_dialog_chose(_ctl_dialog.id)

      if (option.afterClose != undefined) {
        option.afterClose(_ctl_dialog.id, _ctl_iframe)
      }
    }

    if (option.buttons != undefined) {
      for (var key1 in option.buttons) {
        if (option.buttons[key1].function != undefined) {
          option.buttons[key1].handler = function(event) {
            for (var key2 in this.parentElement.children) {
              if (this.parentElement.children[key2] == this) {
                option.buttons[key2].function(_ctl_dialog.id, _ctl_iframe)
              }
            }
          }
        }
      }
    }

    $('#admin_temp_dialog_' + _int_timespan).dialog(option)

    shareted_easyui_dialog_show($('#admin_temp_dialog_' + _int_timespan))

    shareted_easyui_dialog_button_hide($('#admin_temp_dialog_' + _int_timespan))
  }
}

function shareted_common_dialog_chose(dialog_id, control) {
  if (control == undefined) {
    control = self
    while (control.location != top.location && control.parent.location != top.location) {
      control = control.parent
    }
    control.shareted_common_dialog_chose(dialog_id, control)
  } else {
    if (top.$('#' + dialog_id).length > 0) {
      top.$('#' + dialog_id)[0].parentNode.parentNode.removeChild(top.$('#' + dialog_id)[0].parentNode.nextSibling)
      top.$('#' + dialog_id)[0].parentNode.parentNode.removeChild(top.$('#' + dialog_id)[0].parentNode.nextSibling)
      top.$('#' + dialog_id)[0].parentNode.parentNode.removeChild(top.$('#' + dialog_id)[0].parentNode)
    } else if ($('#' + dialog_id).length > 0) {
      $('#' + dialog_id)[0].parentNode.parentNode.removeChild($('#' + dialog_id)[0].parentNode.nextSibling)
      $('#' + dialog_id)[0].parentNode.parentNode.removeChild($('#' + dialog_id)[0].parentNode.nextSibling)
      $('#' + dialog_id)[0].parentNode.parentNode.removeChild($('#' + dialog_id)[0].parentNode)
    }
  }
}
