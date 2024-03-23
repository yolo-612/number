import { getInt } from '../dist'

const lib = getInt.name

test(`${lib} test`, () => {
    expect(getInt(123.23)).toBe(123)
    expect(getInt(123123.123123123123)).toBe(123123)
})
