import { addComma } from '../dist'

const lib = addComma.name

test(`${lib} test`, () => {
    expect(addComma('')).toBe('')
    expect(addComma(NaN)).toBe('NaN')
    expect(addComma(null)).toBe('null')
    expect(addComma(undefined)).toBe('undefined')
    expect(addComma(123.456)).toBe('123.456')
    expect(addComma(1234)).toBe('1,234')
    expect(addComma(123456789)).toBe('123,456,789')
    expect(addComma(-123456789)).toBe('-123,456,789')
    expect(addComma(1234.567)).toBe('1,234.567')
    expect(addComma(-1234.567)).toBe('-1,234.567')
})
