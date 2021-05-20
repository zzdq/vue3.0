function shareted_common_file_upload_init(file, option, success) {
  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = false
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 1
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.jpg;*.png;*.bmp;*.gif;*.xls;*.xlsx;'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = '文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      result = JSON.parse(data)
      if (result.code === 0) {
        shareted_other_hubspot_messenger_show('操作成功！')

        if (undefined != success) {
          success(result.data)
        }
      } else {
        shareted_other_hubspot_messenger_show('操作失败！' + result.msg)
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('上传失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_img_upload_init(file, option, browse, success) {
  if (option == undefined) {
    option = {}
  }

  if (browse[0].classList == undefined) {
    browse[0].className = browse[0].className + ' upload-img'
  } else {
    browse[0].classList.add('upload-img')
  }
  browse[0].style.display = 'none'

  var _obj_img = document.createElement('div')
  _obj_img.id = browse[0].id + '_img'
  _obj_img.setAttribute('href', '')
  _obj_img.setAttribute('data-stretch', '')
  _obj_img.setAttribute('is-img', 'true')
  _obj_img.setAttribute('data-rel', 'lightcase')
  _obj_img.setAttribute('class', 'upload-img-view lightcase_image stretch')
  browse[0].appendChild(_obj_img)

  var _obj_del = document.createElement('button')
  _obj_del.id = browse[0].id + '_del'
  _obj_del.setAttribute('class', 'upload-img-del')
  _obj_del.innerText = '×'
  _obj_del.onclick = function() {
    $('#' + browse[0].id + '_md5')[0].value = ''
    $('#' + browse[0].id + '_md5').attr('value', '')
    browse[0].style.display = 'none'
  }
  browse[0].appendChild(_obj_del)

  var _obj_md5 = document.createElement('input')
  _obj_md5.id = browse[0].id + '_md5'
  _obj_md5.setAttribute('value', '')
  _obj_md5.setAttribute('type', 'hidden')
  browse[0].appendChild(_obj_md5)

  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = false
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 1
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.jpg;*.png;*.bmp;*.gif;'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = '图片文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      if (data != undefined) {
        data = data.replace(/"/g, '')
      }

      shareted_common_file_img_show(browse, data)

      if (undefined != success) {
        success(file, data)
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('上传失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_img_get(browse) {
  if ($('#' + browse[0].id + '_md5')[0].value == undefined) {
    return ''
  } else {
    return $('#' + browse[0].id + '_md5')[0].value + ''
  }
}

function shareted_common_file_img_show(browse, value, model) {
  if (value == undefined || value == '') {
    $('#' + browse[0].id + '_md5')[0].value = ''
    $('#' + browse[0].id + '_md5').attr('value', '')

    if (undefined != browse[0]) {
      browse[0].style.display = 'none'
    }
  } else {
    var md5 = $('#' + browse[0].id + '_md5')
    var img = $('#' + browse[0].id + '_img')

    md5.attr('value', value)

    img.empty()

    img.attr('data-stretch', project_path_root + 'api/file/view/' + md5.attr('value') + '.jpg')

    if (undefined != browse[0]) {
      browse[0].style.display = ''
    }

    img.attr('href', project_path_root + 'api/file/view/' + md5.attr('value') + '.jpg')
    img.lightcase({
      transition: 'elastic'
    })
    img.anystretch()
  }

  if (model == 'show') {
    shareted_common_file_set_show(null, browse)
  }
}

function shareted_common_file_imgs_upload_init(file, option, browses, success, remove) {
  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = true
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 100
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.jpg;*.png;*.bmp;*.gif;'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = '图片文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      if (data != undefined) {
        data = data.replace(/"/g, '')
      }

      var _bl_flag = true
      for (var _int_for in browses[0].children) {
        if (_int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && shareted_common_file_img_get($('#' + browses[0].children[_int_for].id)) == data) {
          _bl_flag = false
        }
      }

      if (_bl_flag) {
        var template = $('#' + browses[0].id + '_template')

        var browse = template.clone()
        browse[0].id = browses[0].id + '_' + data
        if (browse[0].classList == undefined) {
          browse[0].className = browse[0].className + ' upload-imgs input-group'
        } else {
          browse[0].classList.add('upload-imgs')
          browse[0].classList.add('input-group')
        }
        browse[0].style.display = ''
        browses[0].appendChild(browse[0])

        var _obj_img = document.createElement('div')
        _obj_img.id = browse[0].id + '_img'
        _obj_img.setAttribute('href', '')
        _obj_img.setAttribute('data-stretch', '')
        _obj_img.setAttribute('is-img', 'true')
        _obj_img.setAttribute('data-rel', 'lightcase')
        _obj_img.setAttribute('class', 'upload-img-view lightcase_image stretch')
        browse[0].appendChild(_obj_img)

        var _obj_del = document.createElement('button')
        _obj_del.id = browse[0].id + '_del'
        _obj_del.setAttribute('class', 'upload-img-del')
        _obj_del.innerText = '×'
        _obj_del.onclick = function() {
          browses[0].removeChild(browse[0])

          if (undefined != remove) {
            remove(data)
          }
        }
        browse[0].appendChild(_obj_del)

        var _obj_md5 = document.createElement('input')
        _obj_md5.id = browse[0].id + '_md5'
        _obj_md5.setAttribute('value', '')
        _obj_md5.setAttribute('type', 'hidden')
        browse[0].appendChild(_obj_md5)

        shareted_common_file_img_show(browse, data)

        if (undefined != success) {
          success(file, data)
        }
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('上传失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_imgs_show(browses, values, model, remove) {
  for (var rank in values.split(';')) {
    var data = values.split(';')[rank]

    if (data != undefined) {
      data = data.replace(/"/g, '')
    }

    var _bl_flag = true
    for (var _int_for in browses[0].children) {
      if (_int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && shareted_common_file_img_get($('#' + browses[0].children[_int_for].id)) == data) {
        _bl_flag = false
      }
    }

    if (_bl_flag) {
      var template = $('#' + browses[0].id + '_template')

      var browse = template.clone()
      browse[0].id = browses[0].id + '_' + data
      if (browse[0].classList == undefined) {
        browse[0].className = browse[0].className + ' upload-imgs input-group'
      } else {
        browse[0].classList.add('upload-imgs')
        browse[0].classList.add('input-group')
      }
      browse[0].style.display = ''
      browses[0].appendChild(browse[0])

      var _obj_img = document.createElement('div')
      _obj_img.id = browse[0].id + '_img'
      _obj_img.setAttribute('href', '')
      _obj_img.setAttribute('data-stretch', '')
      _obj_img.setAttribute('is-img', 'true')
      _obj_img.setAttribute('data-rel', 'lightcase')
      _obj_img.setAttribute('class', 'upload-img-view lightcase_image stretch')
      browse[0].appendChild(_obj_img)

      var _obj_del = document.createElement('button')
      _obj_del.id = browse[0].id + '_del'
      _obj_del.setAttribute('class', 'upload-img-del')
      _obj_del.innerText = '×'
      _obj_del.onclick = function(event) {
        browses[0].removeChild(event.currentTarget.parentElement)

        if (undefined != remove) {
          remove(data)
        }
      }
      browse[0].appendChild(_obj_del)

      var _obj_md5 = document.createElement('input')
      _obj_md5.id = browse[0].id + '_md5'
      _obj_md5.setAttribute('value', '')
      _obj_md5.setAttribute('type', 'hidden')
      browse[0].appendChild(_obj_md5)

      shareted_common_file_img_show(browse, data)
    }
  }

  if (model == 'show') {
    shareted_common_file_set_show(null, browses)
  }
}

function shareted_common_file_imgs_get(browses) {
  var _arr_img = []

  for (var _int_for in browses[0].children) {
    if (_int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '') {
      _arr_img.push(shareted_common_file_img_get($('#' + browses[0].children[_int_for].id)))
    }
  }

  return _arr_img
}

function shareted_common_file_imgs_reset(browses) {
  while (browses[0].children.length > 1) {
    browses[0].removeChild(browses[0].children[1])
  }
}

function shareted_common_file_file_upload_init(file, option, browse, success, remove) {
  if (option == undefined) {
    option = {}
  }

  if (browse[0].classList == undefined) {
    browse[0].className = browse[0].className + ' upload-file'
  } else {
    browse[0].classList.add('upload-file')
  }
  browse[0].style.display = 'none'

  var _obj_file = document.createElement('a')
  _obj_file.id = browse[0].id + '_file'
  _obj_file.setAttribute('href', '')
  browse[0].appendChild(_obj_file)

  var _obj_temp = document.createElement('span')
  _obj_temp.innerHTML = '&nbsp;&nbsp;'
  browse[0].appendChild(_obj_temp)

  var _obj_del = document.createElement('button')
  _obj_del.id = browse[0].id + '_del'
  _obj_del.setAttribute('class', 'btn btn- btn-primary')
  _obj_del.innerText = '删除'
  _obj_del.onclick = function() {
    $('#' + browse[0].id + '_file')[0].value = ''
    $('#' + browse[0].id + '_file').attr('value', '')
    browse[0].style.display = 'none'

    if (undefined != remove) {
      remove()
    }
  }
  browse[0].appendChild(_obj_del)

  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = false
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 1
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.*'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = '图片文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      var value = data
      if (value != undefined) {
        value = value.replace(/"/g, '')
      }

      if (value == undefined || value == '') {
        _obj_file[0].value = ''
        _obj_file.attr('value', '')

        if (undefined != browse[0]) {
          browse[0].style.display = 'none'
        }
      } else {
        var _str_ext = ''
        if (file.name.indexOf('.') >= 0) {
          _str_ext = file.name.substring(file.name.indexOf('.'))
        }
        _obj_file.innerHTML = file.name
        _obj_file.href = project_path_root + 'api/file/view/' + value + _str_ext
        _obj_file.value = value

        if (undefined != browse[0]) {
          browse[0].style.display = ''
        }
      }

      if (undefined != success) {
        success(file, data)
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('上传失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_file_get(browse) {
  if ($('#' + browse[0].id + '_file')[0].value == undefined || $('#' + browse[0].id + '_file')[0].value == '') {
    return ''
  } else {
    return $('#' + browse[0].id + '_file')[0].value + ''
  }
}

function shareted_common_file_file_get_detail(browse) {
  if ($('#' + browse[0].id + '_file')[0].value == undefined || $('#' + browse[0].id + '_file')[0].value == '') {
    return null
  } else {
    var _obj_file = {}

    _obj_file.md5 = $('#' + browse[0].id + '_file')[0].value
    _obj_file.name = $('#' + browse[0].id + '_file')[0].innerText.lastIndexOf('.') >= 0 ? $('#' + browse[0].id + '_file')[0].innerText.substring(0, $('#' + browse[0].id + '_file')[0].innerText.lastIndexOf('.')) : $('#' + browse[0].id + '_file')[0].innerText
    _obj_file.ext = $('#' + browse[0].id + '_file')[0].innerText.lastIndexOf('.') >= 0 ? $('#' + browse[0].id + '_file')[0].innerText.substring($('#' + browse[0].id + '_file')[0].innerText.lastIndexOf('.')) : ''

    return _obj_file
  }
}

function shareted_common_file_file_set(browse, md5, ext, model) {
  var value = md5
  ext = (ext == undefined ? '' : ext)

  if (value == undefined || value == '') {
    $('#' + browse[0].id + '_file')[0].value = value

    browse[0].style.display = 'none'
  } else {
    $('#' + browse[0].id + '_file')[0].innerHTML = value + ext
    $('#' + browse[0].id + '_file')[0].href = project_path_root + 'api/file/view/' + value + ext
    $('#' + browse[0].id + '_file')[0].value = value

    browse[0].style.display = ''
  }

  if (model == 'show') {
    shareted_common_file_set_show(null, browse)
  }
}

function shareted_common_file_files_upload_init(file, option, browses, success, remove) {
  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = true
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 100
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.*'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = '图片文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      if (data != undefined) {
        data = data.replace(/"/g, '')
      }

      var _bl_flag = true
      for (var _int_for in browses[0].children) {
        if (!isNaN(_int_for) && _int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && browses[0].children[_int_for].localName == 'a' && browses[0].children[_int_for].value == data) {
          _bl_flag = false
        }
      }

      if (_bl_flag) {
        if (browses[0].classList == undefined) {
          browses[0].className = browse[0].className + ' upload-file'
        } else {
          browses[0].classList.add('upload-file')
        }
        browses[0].style.display = 'none'

        var value = data

        var _str_ext = ''
        if (file.name.indexOf('.') >= 0) {
          _str_ext = file.name.substring(file.name.indexOf('.'))
        }

        var _obj_file = document.createElement('a')
        _obj_file.id = browses[0].id + '_' + data + '_file'
        _obj_file.innerHTML = file.name
        _obj_file.href = project_path_root + 'api/file/view/' + value + _str_ext
        _obj_file.value = value
        browses[0].appendChild(_obj_file)

        var _obj_temp1 = document.createElement('span')
        _obj_temp1.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_tmp1'
        _obj_temp1.innerHTML = '&nbsp;&nbsp;'
        browses[0].appendChild(_obj_temp1)

        var _obj_del = document.createElement('button')
        _obj_del.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_del'
        _obj_del.setAttribute('class', 'btn btn- btn-primary')
        _obj_del.innerText = '删除'
        _obj_del.onclick = function() {
          browses[0].removeChild($('#' + _obj_file.id)[0])
          browses[0].removeChild($('#' + _obj_temp1.id)[0])
          browses[0].removeChild($('#' + _obj_del.id)[0])
          browses[0].removeChild($('#' + _obj_temp2.id)[0])

          if (undefined != remove) {
            remove(data)
          }
        }
        browses[0].appendChild(_obj_del)

        var _obj_temp2 = document.createElement('div')
        _obj_temp2.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_tmp2'
        _obj_temp2.innerHTML = '<br />'
        browses[0].appendChild(_obj_temp2)

        if (undefined != browses[0]) {
          browses[0].style.display = ''
        }

        if (undefined != success) {
          success(file, data)
        }
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('上传失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_files_is_uploading(file) {
  if ($('#' + file[0].id + '-queue').length > 0 && $('#' + file[0].id + '-queue')[0].children.length > 0) {
    return true
  }

  return false
}

function shareted_common_file_files_set(browses, data, model, remove) {
  for (var _int_for in data) {
    var file = data[_int_for]

    var _bl_flag = true
    for (var _int_for in browses[0].children) {
      if (!isNaN(_int_for) && _int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && browses[0].children[_int_for].localName == 'a' && browses[0].children[_int_for].value == file.md5) {
        _bl_flag = false
      }
    }

    if (_bl_flag) {
      if (browses[0].classList == undefined) {
        browses[0].className = browse[0].className + ' upload-file'
      } else {
        browses[0].classList.add('upload-file')
      }
      browses[0].style.display = 'none'

      var value = file.md5

      var _str_ext = ''
      if (file.name.indexOf('.') >= 0) {
        _str_ext = file.name.substring(file.name.indexOf('.'))
      }

      var _obj_file = document.createElement('a')
      _obj_file.id = browses[0].id + '_' + file.md5 + '_file'
      _obj_file.innerHTML = file.name
      _obj_file.href = project_path_root + 'api/file/view/' + value + _str_ext
      _obj_file.value = value
      browses[0].appendChild(_obj_file)

      var _obj_temp1 = document.createElement('span')
      _obj_temp1.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_tmp1'
      _obj_temp1.innerHTML = '&nbsp;&nbsp;'
      browses[0].appendChild(_obj_temp1)

      var _obj_del = document.createElement('button')
      _obj_del.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_del'
      _obj_del.setAttribute('class', 'btn btn- btn-primary')
      _obj_del.innerText = '删除'
      _obj_del.onclick = function(event) {
        browses[0].removeChild($('#' + event.currentTarget.id.substring(0, event.currentTarget.id.length - 4) + '_file')[0])
        browses[0].removeChild($('#' + event.currentTarget.id.substring(0, event.currentTarget.id.length - 4) + '_tmp1')[0])
        browses[0].removeChild($('#' + event.currentTarget.id.substring(0, event.currentTarget.id.length - 4) + '_del')[0])
        browses[0].removeChild($('#' + event.currentTarget.id.substring(0, event.currentTarget.id.length - 4) + '_tmp2')[0])

        if (undefined != remove) {
          remove(value)
        }
      }
      browses[0].appendChild(_obj_del)

      var _obj_temp2 = document.createElement('div')
      _obj_temp2.id = _obj_file.id.substring(0, _obj_file.id.length - 5) + '_tmp2'
      _obj_temp2.innerHTML = '<br />'
      browses[0].appendChild(_obj_temp2)

      if (undefined != browses[0]) {
        browses[0].style.display = ''
      }
    }
  }

  if (model == 'show') {
    shareted_common_file_set_show(null, browses)
  }
}

function shareted_common_file_files_get(browses) {
  var _arr_img = []

  for (var _int_for in browses[0].children) {
    if (_int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && browses[0].children[_int_for].localName == 'a') {
      _arr_img.push(browses[0].children[_int_for].value)
    }
  }

  return _arr_img
}

function shareted_common_file_files_get_detail(browses) {
  var _arr_file = []

  for (var _int_for in browses[0].children) {
    if (_int_for < browses[0].children.length && browses[0].children[_int_for].style.display == '' && browses[0].children[_int_for].localName == 'a') {
      var _obj_file = {}

      _obj_file.md5 = browses[0].children[_int_for].value
      _obj_file.name = browses[0].children[_int_for].innerText.lastIndexOf('.') >= 0 ? browses[0].children[_int_for].innerText.substring(0, browses[0].children[_int_for].innerText.lastIndexOf('.')) : browses[0].children[_int_for].innerText
      _obj_file.ext = browses[0].children[_int_for].innerText.lastIndexOf('.') >= 0 ? browses[0].children[_int_for].innerText.substring(browses[0].children[_int_for].innerText.lastIndexOf('.')) : ''

      _arr_file.push(_obj_file)
    }
  }

  return _arr_file
}

function shareted_common_file_files_reset(browses) {
  while (browses[0].children.length > 0) {
    browses[0].removeChild(browses[0].children[0])
  }
}

function shareted_common_file_excel_upload_init(file, option, success) {
  if (option == undefined) {
    option = {}
  }

  if (option.swf == undefined) {
    option.swf = project_path_root + 'plugin/uploadify/uploadify.swf'
  }
  if (option.uploader == undefined) {
    option.uploader = project_path_root + 'api/file/upload?referer=ignore'
  } else if (option.uploader.indexOf('?') >= 0) {
    option.uploader += '&referer=ignore'
  } else {
    option.uploader += '?referer=ignore'
  }
  if (option.height == undefined) {
    option.height = '35'
  }
  if (option.wight == undefined) {
    option.wight = '115'
  }
  if (option.auto == undefined) {
    option.auto = true
  }
  if (option.buttonText == undefined) {
    option.buttonText = '选择文件'
  }
  if (option.hideButton == undefined) {
    option.hideButton = false
  }
  if (option.fileObjName == undefined) {
    option.fileObjName = 'file'
  }
  if (option.multi == undefined) {
    option.multi = false
  }
  if (option.queueSizeLimit == undefined) {
    option.queueSizeLimit = 1
  }
  if (option.fileSizeLimit == undefined) {
    option.fileSizeLimit = '25MB'
  }
  if (option.fileDesc == undefined) {
    option.fileDesc = '请选择文件'
  }
  if (option.fileTypeExts == undefined) {
    option.fileTypeExts = '*.xls;*.xlsx;'
  }
  if (option.fileTypeDesc == undefined) {
    option.fileTypeDesc = 'Excel文件'
  }
  if (option.wmode == undefined) {
    option.wmode = 'transparent'
  }

  if (option.onUploadSuccess == undefined) {
    option.onUploadSuccess = function(file, data, response) {
      if (data != undefined) {
        data = data.replace(/"/g, '')
      }

      if (data.indexOf('code') != -1 && data.indexOf('"code"') == -1 && data.indexOf('\'code\'') == -1) {
        data = data.replace(/code/g, '"code"')
      }
      if (data.indexOf('msg') != -1 && data.indexOf('"msg"') == -1 && data.indexOf('\'msg\'') == -1) {
        data = data.replace(/msg/g, '"msg"')
      }
      if (data.indexOf('data') != -1 && data.indexOf('"data"') == -1 && data.indexOf('\'data\'') == -1) {
        data = data.replace(/data/g, '"data"')
      }
      if (data.indexOf('操作成功！') != -1 && data.indexOf('"操作成功！"') == -1 && data.indexOf('\'操作成功！\'') == -1) {
        data = data.replace(/操作成功！/g, '"操作成功！"')
      }
      if (data.indexOf('操作失败！') != -1 && data.indexOf('"操作失败！"') == -1 && data.indexOf('\'操作失败！\'') == -1) {
        data = data.replace(/操作失败！/g, '"操作失败！"')
      }
      var result = JSON.parse(data)
      if (result.code === 0) {
        shareted_other_hubspot_messenger_show('操作成功！')

        if (undefined != success) {
          success(result.data)
        }
      } else {
        shareted_other_hubspot_messenger_show('操作失败！' + result.msg)
      }
    }
  }
  if (option.onError == undefined) {
    option.onError = function(event, ID, fileObj, errorObj) {
      shareted_other_hubspot_messenger_show('操作失败，错误码:' + errorObj.type + errorObj.info)
    }
  }

  file.uploadify(option)
}

function shareted_common_file_set_show(file, browser) {
  if (file != undefined) {
    for (var key in file) {
      if (!isNaN(key)) {
        file[key].style.display = 'none'
      }
    }
  }

  if (browser != undefined) {
    for (var key in browser.find('.upload-img-del')) {
      if (!isNaN(key)) {
        browser.find('.upload-img-del')[key].style.display = 'none'
      }
    }

    for (var key in browser.find('.btn')) {
      if (!isNaN(key)) {
        browser.find('.btn')[key].style.display = 'none'
      }
    }
  }
}

function shareted_common_file_set_edit(file, browser) {
  if (file != undefined) {
    for (var key in file) {
      if (!isNaN(key)) {
        file[key].style.display = ''
      }
    }
  }

  if (browser != undefined) {
    for (var key in browser.find('.upload-img-del')) {
      if (!isNaN(key)) {
        browser.find('.upload-img-del')[key].style.display = ''
      }
    }

    for (var key in browser.find('.btn')) {
      if (!isNaN(key)) {
        browser.find('.btn')[key].style.display = ''
      }
    }
  }
}

function shareted_common_file_is_image(file) {
  if (file.type) {
    return /^image\/\w+$/.test(file.type)
  } else {
    return /\.(jpg|jpeg|png|gif)$/.test(file)
  }
}

function shareted_common_file_saveas(imgURL) {
  var oPop = window.open(imgURL)
  if (!oPop || oPop.closed || typeof oPop.closed === 'undefined') {
    shareted_other_hubspot_messenger_show('无法下载文件，弹窗已经被浏览器拦截！')
  } else {
    for (; oPop.document.readyState != 'complete';) {
      if (oPop.document.readyState == 'complete') {
        break
      }
    }

    oPop.document.execCommand('SaveAs')
  }
}

function shareted_common_file_saveas_from_blob(blob, filename) {
  var type = blob.type
  var force_saveable_type = 'application/octet-stream'
  if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开
    var slice = blob.slice || blob.webkitSlice || blob.mozSlice
    blob = slice.call(blob, 0, blob.size, force_saveable_type)
  }

  var url = URL.createObjectURL(blob)
  var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  save_link.href = url
  save_link.download = filename

  var event = document.createEvent('MouseEvents')
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  save_link.dispatchEvent(event)
  URL.revokeObjectURL(url)
}
