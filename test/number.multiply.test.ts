import { multiply } from '../dist'

const lib = multiply.name

const T = function (num1, num2, expected) {
    test(`${Array.from(arguments).join(' ')} test`, () => {
        expect(multiply(num1, num2) + '').toBe(expected + '')
    })
}

describe(`${lib} test`, () => {
    // 原生返回 0.00008999999999999999
    T(0.3, 0.0003, 0.00009)
    // 原生返回 0.00017999999999999998
    T(0.3, 0.0006, 0.00018)
    // 原生返回 0.00020999999999999998
    T(0.3, 0.0007, 0.00021)
    // 原生返回 0.00006299999999999999
    expect(multiply(0.3, 0.0007, 0.3)).toBe(0.000063)

    expect(multiply(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(7.307508186654512e+47)
})
