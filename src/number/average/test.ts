import { average } from "./average";

describe("average", () => {
  it("returns the average of two numbers", () => {
    expect(average([1, 2])).toBe(1.5);
  });

  it("returns the average of multiple numbers", () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });

  it("returns 0 for an empty array", () => {
    expect(average([])).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(average([-2, -4, -6])).toBe(-4);
  });
});
