import { checkIsNumber } from "./checkIsNumber";

describe("checkIsNumber", () => {
  it("returns true for valid number", () => {
    expect(checkIsNumber(42)).toBe(true);
  });

  it("returns false for NaN", () => {
    expect(checkIsNumber(NaN)).toBe(false);
  });

  it("returns false for non-number types", () => {
    expect(checkIsNumber("42")).toBe(false);
    expect(checkIsNumber(null)).toBe(false);
    expect(checkIsNumber(undefined)).toBe(false);
    expect(checkIsNumber({})).toBe(false);
    expect(checkIsNumber([])).toBe(false);
  });

  it("returns true for Infinity when checkForFiniteNumber is false", () => {
    expect(checkIsNumber(Infinity)).toBe(true);
  });

  it("returns false for Infinity when checkForFiniteNumber is true", () => {
    expect(checkIsNumber(Infinity, true)).toBe(false);
  });

  it("returns false for -Infinity when checkForFiniteNumber is true", () => {
    expect(checkIsNumber(-Infinity, true)).toBe(false);
  });

  it("returns true for finite number when checkForFiniteNumber is true", () => {
    expect(checkIsNumber(3.14, true)).toBe(true);
  });
});
