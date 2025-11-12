import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("returns empty string for empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles single character strings", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("z")).toBe("Z");
  });

  it("handles already capitalized strings", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("WORLD");
  });

  it("handles strings with numbers", () => {
    expect(capitalize("123abc")).toBe("123abc");
    expect(capitalize("abc123")).toBe("Abc123");
  });

  it("handles strings with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
    expect(capitalize(" hello")).toBe(" hello");
  });
});

