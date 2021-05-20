export function shareted_common_float_long_value(val) {
  console.log(val)
  const e = String(val)
  const rex = /^([0-9])\.?([0-9]*)e-([0-9])/
  if (!rex.test(e)) return val
  const numArr = e.match(rex)
  const n = Number('' + numArr[1] + (numArr[2] || ''))
  const num =
        '0.' + String(Math.pow(10, Number(numArr[3]) - 1)).substr(1) + n
  console.log(num)
  return num.replace(/0*$/, '') // 防止可能出现0.0001540000000的情况
}

export default {
  shareted_common_float_long_value
}
