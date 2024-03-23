import fixed from './fixed';

/**
 * 获取两个整数之间的随机整数
 * @function random
 * @param {number} a
 * @param {number} b
 */
export default function random(a: number, b: number): number {
  a = fixed(a, 0);
  b = fixed(b, 0);
  const max = Math.max(fixed(a), b);
  const min = Math.min(a, b);
  return Math.floor((max - min + 1) * Math.random() + min);
}
