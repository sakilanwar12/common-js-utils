import { randomInRange } from "./randomInRange";

describe("randomInRange", () => {
  it("returns a number within the default range [0, 1]", () => {
    const result = randomInRange();
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(2);
  });

  it("returns a number within a custom range [5, 10]", () => {
    const result = randomInRange(5, 10);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(11); // because of +1
  });

  it("returns a number within a negative range [-10, -5]", () => {
    const result = randomInRange(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-4);
  });

  it("returns the same number when min and max are equal", () => {
    const result = randomInRange(7, 7);
    expect(result).toBeGreaterThanOrEqual(7);
    expect(result).toBeLessThanOrEqual(8);
  });

  it("returns a number between 0 and 100 in multiple runs", () => {
    for (let i = 0; i < 10; i++) {
      const result = randomInRange(0, 100);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(101);
    }
  });
});
