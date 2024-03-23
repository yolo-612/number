/**
 * <pre>
 * <b>数字操作方法</b>
 * 方法集合中包含了常见的url操作，以及包含了一个图片处理函数
 * 部分方法只能作用于浏览器，不适用于node环境
 * 操作hash相关的方法都可以直接作用于location.href,只要将url参数置空或者穿null即可
 *
 * <b>可用环境</b>：小程序、H5、NodeJS
 * </pre>
 *
 * @module @base/number
 */

import addComma from './lib/add-comma';
import fixed from './lib/fixed';
import formatNum from './lib/format-num';
import getDecimal from './lib/get-decimal';
import getInt from './lib/get-int';
import {
  plus,
  minus,
  multiply,
  divide,
  digitLength,
  round,
  float2Int
} from './lib/operation';
import random from './lib/random';

export {
  float2Int,
  plus,
  addComma,
  divide,
  fixed,
  formatNum,
  getDecimal,
  getInt,
  digitLength,
  round,
  multiply,
  random,
  minus,
};
