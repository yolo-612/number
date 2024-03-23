import { formatNum } from '../dist'

const lib = formatNum.name

test(`${lib} test`, () => {
    expect(formatNum(12345)).toBe('1.2万')
    expect(formatNum(12345, 10000, '万', 0)).toBe('1万')
    expect(formatNum(123456789, 100000000, '亿')).toBe('1.2亿')
    expect(formatNum(987654321, 100000000, '亿')).toBe('9.9亿')
    expect(formatNum(987654321, 100000000, '亿', 0, 'ceil')).toBe('10亿')
    expect(formatNum(987654321, 100000000, '亿', 0, 'floor')).toBe('9亿')
    expect(formatNum(11998, 10000, '万+', 2, 'floorfixed')).toBe('1.19万+')
})
