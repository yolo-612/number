import { divide } from '../dist'

const lib = divide.name

const T = function (num1, num2, expected) {
    test(`${Array.from(arguments).join()} test`, () => {
        expect(divide(num1, num2) + '').toBe(expected + '')
    })
}

describe(`${lib} test`, () => {
    // 原生返回 2.9999999999999996
    T(0.3, 0.1, 3)
    // 原生返回 1.4999999999999998
    T(0.3, 0.2, 1.5)
})
