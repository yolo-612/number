/**
 * Return digits length of a number
 * @param {number} num Input number
 */
function digitLength(num: number): number {
  // Get digit length of e
  // 对于科学计数法处理
  const eSplit = num.toString().split(/[eE]/)
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
  return len > 0 ? len : 0
}

/**
 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
 * @param num    待转化数据
 * @return {number}
 * @example
 * float2Int(125);
 * //125
 * float2Int(1.25);
 * //125
 * float2Int(12.2e-2);
 * //122
 */
function float2Int(num: number): number {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''))
  }
  const dLen = digitLength(num)
  return dLen > 0 ? num * Math.pow(10, dLen) : num
}

/**
 * 检测数字是否越界，如果越界给出提示
 * @param {number} num 输入数
 * @ignore
 */
function checkBoundary(num: number): void {
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`)
  }
}

/**
 * 精确乘法
 * @function multiply
 * @param num1
 * @param num2
 * @param others
 * @return {*}
 */
function times(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return times(times(num1, num2), others[0], ...others.slice(1))
  }
  const num1Changed = float2Int(num1)
  const num2Changed = float2Int(num2)
  const baseNum = digitLength(num1) + digitLength(num2)
  const leftValue = num1Changed * num2Changed

  checkBoundary(leftValue)

  return leftValue / Math.pow(10, baseNum)
}

/**
 * 精确加法
 * @param num1
 * @param num2
 * @param others
 * @return {*}
 */
function plus(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return plus(plus(num1, num2), others[0], ...others.slice(1))
  }
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum
}

/**
 * 精确减法
 * @param num1
 * @param num2
 * @param others
 * @return {*}
 */
function minus(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return minus(minus(num1, num2), others[0], ...others.slice(1))
  }
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum
}

/**
 * 精确除法
 */
function divide(num1: number, num2: number, ...others: number[]): number {
  if (others.length > 0) {
    return divide(divide(num1, num2), others[0], ...others.slice(1))
  }
  const num1Changed = float2Int(num1)
  const num2Changed = float2Int(num2)
  checkBoundary(num1Changed)
  checkBoundary(num2Changed)
  return times(
    num1Changed / num2Changed,
    Math.pow(10, digitLength(num2) - digitLength(num1))
  )
}

/**
 * 四舍五入
 * @param num
 * @param ratio
 * @return {*}
 */
function round(num: number, ratio: number): number {
  const base = Math.pow(10, ratio)
  return divide(Math.round(times(num, base)), base)
}

export { float2Int, round, digitLength, plus, minus, times as multiply, divide }
