/**
 * 精确四舍五入保留小数位数
 * 使用原生的 toFixed 方法，由于浮点数的问题，会导致形如 (123.345).toFixed(2) 返回 123.34 的错误，因此原生的 toFixed 这个方法慎用
 * @function fixedNum
 * @param {number} num
 * @param {number} fixed = 2
 * @return {number}
 *
 * @example
 *
 * fixed(123.345)
 * // 123.35
 *
 * @module number
 * @function fixed
 */
export default function fixedNum(num, fixed: number = 2): number {
  fixed = Math.floor(fixed)
  if (Number.isNaN(fixed) || fixed < 0) return num
  return Number(`${Math.round(+`${num}e${fixed}`)}e-${fixed}`)
}
