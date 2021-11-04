import { typeOf } from '../utils'

test('copy typeOf', () => {
  expect(typeOf(null)).toBe('null')
})
