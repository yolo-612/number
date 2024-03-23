import fixed from './fixed';

/**
 * 获取数字的小数
 * @function getDecimal
 * @param {number} val 要处理的数字
 * @param {number} n 保留的小数位数，默认不进行四舍五入
 * @param {*} dot = true 返回值是否包含小数点
 *
 * @returns {string}
 *
 * @example
 *
 * getDecimal(123.456)
 * // .456
 */
export default function getDecimal(val, n: number = 0, dot: boolean = true): string {
  let replacer = '.';
  if (!dot) replacer = '';
  if (+n > 0) val = fixed(val, +n);
  return `${val}`.replace(/^.*\./, replacer);
}
