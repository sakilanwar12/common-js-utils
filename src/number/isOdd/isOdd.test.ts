import { isOdd } from "./isOdd";

describe("isOdd", () => {
  it("returns true for odd positive numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(99)).toBe(true);
  });

  it("returns true for odd negative numbers", () => {
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  it("returns false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
});
