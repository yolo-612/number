import { getDecimal } from '../dist'

const lib = getDecimal.name

test(`${lib} test`, () => {
    expect(getDecimal(123.344)).toBe('.344')
    expect(getDecimal(123.344, null, false)).toBe('344')
    expect(getDecimal(123.344, 2)).toBe('.34')
})
