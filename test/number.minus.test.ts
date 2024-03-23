import { minus } from '../dist'

const lib = minus.name

const T = function (num1, num2, expected) {
    test(`${Array.from(arguments).join(' ')} test`, () => {
        expect(minus(num1, num2) + '').toBe(expected + '')
    })
}

describe(`${lib} test`, () => {
    T(0.3, 0.2, 0.1)
    T(0.3, 0.1, 0.2)
})
