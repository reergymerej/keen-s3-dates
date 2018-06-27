import * as app from './index'

describe('reduceIntSet', () => {
  it('should reduce a set of ints', () => {
    expect(app.reduceIntSet(['0'])).toBe('0')
    expect(app.reduceIntSet('0123'.split(''))).toBe('[0123]')
    expect(app.reduceIntSet('0123456789'.split(''))).toBe('?')
    expect(app.reduceIntSet('567'.split(''))).toBe('[567]')
  })
})

describe('simpleRange', () => {
  it('should work', () => {
    const result = app.simpleRange('00', '10')
    expect(result).toEqual('0?')
  })
})
