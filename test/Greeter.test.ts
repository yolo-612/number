import { Greeter } from '../src/index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('NPM 接入 TS Carl');
});
