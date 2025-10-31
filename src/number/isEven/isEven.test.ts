import { isEven } from "./isEven";

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(-24)).toBe(true);
  });

  it("returns false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
  });
});
