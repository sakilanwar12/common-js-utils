import { multiply } from './multiply'

describe('multiply', () => {
  it('returns the product of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  it('returns the product of a positive and a negative number', () => {
    expect(multiply(-5, 6)).toBe(-30)
  })

  it('returns the product of two negative numbers', () => {
    expect(multiply(-2, -8)).toBe(16)
  })

  it('returns zero when one operand is zero', () => {
    expect(multiply(0, 10)).toBe(0)
    expect(multiply(7, 0)).toBe(0)
  })

  it('returns correct product for decimal numbers', () => {
    expect(multiply(2.5, 4)).toBe(10)
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02)
  })
})