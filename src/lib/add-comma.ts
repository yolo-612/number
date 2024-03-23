/**
 * 千分位分割数字
 * @returns {string} 处理后得到的字符串
 *
 *
 * @function addComma
 * @example：
 * addComma(1234)
 * // 1,234
 *
 * @category number
 */
export default function addComma(num: string | number): string {
  return `${num}`.replace(/(^|\s|-)\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
