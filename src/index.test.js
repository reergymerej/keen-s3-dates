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
  it('should handle those needing only a single include', () => {
    expect(app.simpleRange('0', '1')).toEqual(['+0'])
    expect(app.simpleRange('00', '10')).toEqual(['+0?'])
    expect(app.simpleRange('00', '50')).toEqual(['+[01234]?'])
  })

  fit('should handle those needing include and exclude', () => {
    expect(app.simpleRange('00', '51')).toEqual([
      '+[01234]?', // include
      '+5[01]', // include
      '-[56789]?', // exclude
    ])
  })
})
