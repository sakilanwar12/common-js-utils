import { truncate } from "./truncate";

describe("truncate", () => {
  it("truncates a string to the specified length", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
    expect(truncate("foo bar baz", 7)).toBe("foo bar...");
  });

  it("returns the original string if it's shorter than the length", () => {
    expect(truncate("hello", 10)).toBe("hello");
    expect(truncate("foo", 5)).toBe("foo");
  });

  it("returns the original string if length equals string length", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  it("uses custom suffix", () => {
    expect(truncate("hello world", 5, "…")).toBe("hello…");
    expect(truncate("foo bar", 3, "")).toBe("foo");
  });

  it("handles empty strings", () => {
    expect(truncate("", 5)).toBe("");
  });

  it("handles zero length", () => {
    expect(truncate("hello world", 0)).toBe("...");
    expect(truncate("hello world", 0, "")).toBe("");
  });

  it("handles negative length by returning original string", () => {
    expect(truncate("hello world", -5)).toBe("hello world");
  });

  it("handles very long strings", () => {
    const longString = "a".repeat(100);
    expect(truncate(longString, 10)).toBe("a".repeat(10) + "...");
  });

  it("handles unicode characters", () => {
    expect(truncate("hello 🌍 world", 8)).toBe("hello 🌍...");
  });
});

