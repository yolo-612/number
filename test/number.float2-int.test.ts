/**
 * Created by xiaomuqun on 2019/4/23.
 */

import { float2Int } from '../dist'

const lib = float2Int.name

test(`${lib} test 0`, () => {
    expect(float2Int(0)).toBe(0)
})

test(`${lib} test 99.76`, () => {
    expect(float2Int(99.76)).toBe(9976)
})

test(`${lib} test 98.001`, () => {
    expect(float2Int(98.001)).toBe(98001)
})

test(`${lib} test 98.1e-3`, () => {
    expect(float2Int(98.1e-3)).toBe(981)
})

test(`${lib} test 12.2e-2`, () => {
    expect(float2Int(12.2e-2)).toBe(122)
})
