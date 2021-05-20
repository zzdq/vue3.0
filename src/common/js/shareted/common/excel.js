function shareted_common_excel_workbook_to_buffer(workbook) {
  var buf = new ArrayBuffer(workbook.length)
  var view = new Uint8Array(buf)
  for (var i = 0; i != workbook.length; ++i) view[i] = workbook.charCodeAt(i) & 0xFF
  return buf
}
