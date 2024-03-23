import { fixed } from '../dist'

const lib = fixed.name

test(`${lib} test`, () => {
    expect(fixed(99.76)).toBe(99.76)
    expect(fixed(-1.111, -1)).toBe(-1.111)
    expect(fixed(98.9945, 3)).toBe(98.995)
})
