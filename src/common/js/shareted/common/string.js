// g，表示全文匹配；
// m，表示多行匹配(也就是正则表达式出现“^”、“$”，如果要匹配的字符串其中有换行符也没关系)；
// i，表示忽略大小写
String.prototype.replaceAll = function(findText, repText) {
  var newRegExp = new RegExp(findText, 'gm')
  return this.replace(newRegExp, repText)
}
