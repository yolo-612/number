import { plus } from '../dist'

const lib = plus.name

const T = function (num1, num2, expected) {
    test(`${Array.from(arguments).join(' ')} test`, () => {
        expect(plus(num1, num2) + '').toBe(expected + '')
    })
}

describe(`${lib} test`, () => {
    T(0.00000016, 5, 5.00000016)
    T(1, 0.0000002, 1.0000002)
    T(0.1, 0.2, 0.3)
    // 原生返回 0.30000000000000004

    expect(plus(0.1, 0.1, 0.1)).toBe(0.3)
})
