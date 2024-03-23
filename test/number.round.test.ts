import { round } from '../dist'

const lib = round.name

describe(`${lib} test`, () => {
    test(`round(0.3, 0.2, 0.1) test`, () => {
        expect(round(0.321, 1) + '').toBe('0.3')
    })
    test(`round(0.3, 0.1, 0.2) test`, () => {
        expect(round(0.35, 1) + '').toBe('0.4')
    })
})
