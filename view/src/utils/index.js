// 计算输入时间和当前时间差多少年几个月
export function dateToYearMonth (date) {
  const currentTime = new Date()
  const inputTime = new Date(date)
  const diffTime = Math.abs(currentTime - inputTime)
  const yearsDiff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)) // 年数
  const monthsDiff = Math.round((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
  return `${yearsDiff}年${monthsDiff}月`
}
