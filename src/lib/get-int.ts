/**
 * 获取数字的整数部分
 * @function getInt
 * @param val          数字
 * @returns {number}   数字的整数部分
 */
export default function getInt(val: number): number {
  return Math.trunc(val);
}
