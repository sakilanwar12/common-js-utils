import { checkIsValidRange } from "./checkIsValidRange";

describe("checkIsValidRange", () => {
  it("returns true for a number within the range", () => {
    expect(checkIsValidRange(5, 1, 10)).toBe(true);
  });

  it("returns true for a number equal to the min boundary", () => {
    expect(checkIsValidRange(1, 1, 10)).toBe(true);
  });

  it("returns true for a number equal to the max boundary", () => {
    expect(checkIsValidRange(10, 1, 10)).toBe(true);
  });

  it("returns false for a number below the min boundary", () => {
    expect(checkIsValidRange(0, 1, 10)).toBe(false);
  });

  it("returns false for a number above the max boundary", () => {
    expect(checkIsValidRange(11, 1, 10)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(checkIsValidRange(NaN, 1, 10)).toBe(false);
  });

  it("returns false for non-number types", () => {
    expect(checkIsValidRange("5", 1, 10)).toBe(false);
    expect(checkIsValidRange(null, 1, 10)).toBe(false);
    expect(checkIsValidRange(undefined, 1, 10)).toBe(false);
    expect(checkIsValidRange({}, 1, 10)).toBe(false);
    expect(checkIsValidRange([], 1, 10)).toBe(false);
  });
});
