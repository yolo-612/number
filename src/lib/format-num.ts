import fixed from './fixed';
import { divide } from './operation';

/**
 * 格式化数字
 * @function formatNum
 * @param {number} num 要处理的数字
 * @param {number} unit 单位值，即以多少为单位，默认是10000。
 * @param {string} strUnit 单位描述，用于展示，默认是'万'。譬如以10000为单位，可以传'万'，以1000为单位可以传'千'
 * @param {number} decimalDigit 保留几位小数（四舍五入），默认保留一位，mode为fixed时有效
 * @param {string} mode 三种模式：fixed(四舍五入)、ceil(向上取整)、floor(向下取整)，floorfixed(保留小数，但不做四舍五入)，默认是fixed模式
 * @return {string} 格式化之后的结果
 * @example
 * formatNum(12345)
 * // 1.2万
 * formatNum(12345, 10000, '万', 0)
 * // 1万
 * formatNum(12345, 10000, 'w+', 0)
 * // 1w+
 * formatNum(123456789, 100000000, '亿', 1)
 * // 1.2亿
 * formatNum(987654321, 100000000, '亿', 1)
 * // 9.9亿
 * formatNum(987654321, 100000000, '亿', 0, 'ceil')
 * // 10亿
 * formatNum(987654321, 100000000, '亿', 0, 'floor')
 * // 9亿
 * formatNum(11998, 10000, '万+', 2, 'floorfixed')
 * // 1.19万+
 */
export default function formatNum(
  num: number,
  unit = 10000,
  strUnit = '万',
  decimalDigit = 1,
  mode = 'fixed'
): string {
  if (unit <= 0 || num <= 0) {
    return '0';
  }
  if (num >= unit) {
    let val = divide(num, unit);
    switch (mode) {
      case 'ceil':
        val = Math.ceil(val);
        break;
      case 'floor':
        val = Math.floor(val);
        break;
      case 'floorfixed': {
        const base = Math.pow(10, decimalDigit);
        val = Math.floor(val * base) / base;
        break;
      }
      default:
        val = fixed(val, decimalDigit);
        break;
    }
    return `${val}${strUnit}`;
  }
  return `${num}`;
}
