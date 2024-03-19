// 计算输入时间和当前时间差多少年几个月
export function dateToYearMonth (date) {
  const currentTime = new Date()
  const inputTime = new Date(date)
  const diffTime = Math.abs(currentTime - inputTime)
  const yearsDiff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)) // 年数
  const monthsDiff = Math.round((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
  return `${yearsDiff}年${monthsDiff}月`
}

// 计算输入时间和当前时间差几天
export function dateToDays (date) {
  const currentTime = new Date()
  const inputTime = new Date(date)
  // 计算时间间隔（以毫秒为单位）
  const timeDiff = currentTime.getTime() - inputTime.getTime()
  // 将毫秒数转换为天数
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
  return daysDiff
}

// 计算生日倒计时(新历)
export function dateUntilBirthday (birthdayMonth, birthdayDate) {
  const today = new Date()
  const currentYear = today.getFullYear()
  const birthday = new Date(currentYear, birthdayMonth - 1, birthdayDate) // 月份从 0 开始，所以要减去 1

  if (today > birthday) {
    birthday.setFullYear(currentYear + 1) // 如果今年的生日已经过了，就取明年的生日
  }

  const diffTime = birthday.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

// 时间转换
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  // 兼容 ios 开始
  time = time.replace(/T/g, ' ').replace(/.[\d]{3}Z/, ' ')
  time = time.replace(/-/g, '/')
  time = time.substr(0, 19)
  time = new Date(time)
  time = new Date(time.getTime() + 8 * 3600 * 1000)
  // console.log('time >>', time)
  // 兼容 ios 结束
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  // console.log('formatObj >>', formatObj)
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      const index = value - 1 >= 0 ? value - 1 : 6
      return ['一', '二', '三', '四', '五', '六', '日'][index]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
