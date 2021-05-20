function shareted_common_array_contain(arr_data, obj_data) {
  var i = arr_data.length

  while (i--) {
    if (arr_data[i] == obj_data) {
      return true
    }
  }

  return false
}
