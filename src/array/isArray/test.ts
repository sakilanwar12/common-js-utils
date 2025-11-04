import { isArray } from './isArray';

describe('isArray', () => {
  test('returns true for number array', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test('returns true for empty array', () => {
    expect(isArray([])).toBe(true);
  });

  test('returns false for string', () => {
    expect(isArray('hello')).toBe(false);
  });

  test('returns false for number', () => {
    expect(isArray(42)).toBe(false);
  });

  test('returns false for plain object', () => {
    expect(isArray({ key: 'value' })).toBe(false);
  });

  test('returns false for null', () => {
    expect(isArray(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isArray(undefined)).toBe(false);
  });

  test('returns false for function', () => {
    expect(isArray(() => {})).toBe(false);
  });

  test('returns false for Date object', () => {
    expect(isArray(new Date())).toBe(false);
  });

  test('returns true for array with mixed values', () => {
    expect(isArray([null, undefined, ''])).toBe(true);
  });
});