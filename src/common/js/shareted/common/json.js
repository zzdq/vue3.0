function shareted_common_json_to_string(json) {
  return JSON.stringify(json)
}

function shareted_common_json_from_string(str) {
  return JSON.parse(str)
}

function shareted_common_json_is_empty_object(json) {
  var t
  for (t in json) { return !1 }
  return !0
}
