import { removeSpaces } from "./removeSpaces";

describe("removeSpaces", () => {
  it("removes spaces from a string", () => {
    expect(removeSpaces("hello world")).toBe("helloworld");
    expect(removeSpaces("foo bar baz")).toBe("foobarbaz");
  });

  it("removes multiple consecutive spaces", () => {
    expect(removeSpaces("hello    world")).toBe("helloworld");
    expect(removeSpaces("foo   bar   baz")).toBe("foobarbaz");
  });

  it("removes tabs and newlines", () => {
    expect(removeSpaces("hello\tworld")).toBe("helloworld");
    expect(removeSpaces("hello\nworld")).toBe("helloworld");
    expect(removeSpaces("hello\r\nworld")).toBe("helloworld");
  });

  it("handles strings with no spaces", () => {
    expect(removeSpaces("helloworld")).toBe("helloworld");
    expect(removeSpaces("foobarbaz")).toBe("foobarbaz");
  });

  it("handles empty strings", () => {
    expect(removeSpaces("")).toBe("");
    expect(removeSpaces("   ")).toBe("");
  });

  it("handles strings with only spaces", () => {
    expect(removeSpaces(" ")).toBe("");
    expect(removeSpaces("     ")).toBe("");
  });

  it("preserves other characters", () => {
    expect(removeSpaces("hello world!")).toBe("helloworld!");
    expect(removeSpaces("foo 123 bar")).toBe("foo123bar");
  });
});

