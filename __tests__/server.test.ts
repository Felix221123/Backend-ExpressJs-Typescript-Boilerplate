import { Add } from '../src/server'

describe('Server.ts', () => {
  test('it should add the numbers', () => {
    expect(Add(1, 1)).toEqual(2)
  })
})
