import { checkIsPositiveNumber } from "./checkIsPositiveNumber";

describe("checkIsPositiveNumber", () => {
  it("returns true for positive numbers", () => {
    expect(checkIsPositiveNumber(5)).toBe(true);
    expect(checkIsPositiveNumber(0.1)).toBe(true);
  });

  it("returns false for zero", () => {
    expect(checkIsPositiveNumber(0)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(checkIsPositiveNumber(-3)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(checkIsPositiveNumber(NaN)).toBe(false);
  });

  it("returns true for Infinity when checkForFiniteNumber is false", () => {
    expect(checkIsPositiveNumber(Infinity)).toBe(true);
  });

  it("returns false for non-number types", () => {
    expect(checkIsPositiveNumber("5")).toBe(false);
    expect(checkIsPositiveNumber(null)).toBe(false);
    expect(checkIsPositiveNumber(undefined)).toBe(false);
    expect(checkIsPositiveNumber({})).toBe(false);
  });
});
