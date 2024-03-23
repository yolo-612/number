import { random } from '../dist'

const lib = random.name

test(`${lib} test`, () => {
    for (let i = 0; i < 100; i++) {
      expect(random(5, 10)).toBeGreaterThanOrEqual(5)
      expect(random(5, 10)).toBeLessThanOrEqual(10)
    }
})
