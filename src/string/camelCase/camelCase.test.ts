import { camelCase } from "./camelCase";

describe("camelCase", () => {
  it("converts space-separated words to camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
    expect(camelCase("foo bar baz")).toBe("fooBarBaz");
  });

  it("converts kebab-case to camelCase", () => {
    expect(camelCase("hello-world")).toBe("helloWorld");
    expect(camelCase("foo-bar-baz")).toBe("fooBarBaz");
  });

  it("converts snake_case to camelCase", () => {
    expect(camelCase("hello_world")).toBe("helloWorld");
    expect(camelCase("foo_bar_baz")).toBe("fooBarBaz");
  });

  it("handles already camelCase strings", () => {
    expect(camelCase("helloWorld")).toBe("helloWorld");
    expect(camelCase("camelCase")).toBe("camelCase");
  });

  it("handles PascalCase strings", () => {
    expect(camelCase("HelloWorld")).toBe("helloWorld");
    expect(camelCase("PascalCase")).toBe("pascalCase");
  });

  it("handles strings with special characters", () => {
    expect(camelCase("hello@world#test")).toBe("helloWorldTest");
    expect(camelCase("foo!bar$baz")).toBe("fooBarBaz");
  });

  it("handles empty strings", () => {
    expect(camelCase("")).toBe("");
    expect(camelCase("   ")).toBe("");
  });

  it("handles single words", () => {
    expect(camelCase("hello")).toBe("hello");
    expect(camelCase("HELLO")).toBe("hello");
  });

  it("handles mixed case strings", () => {
    expect(camelCase("Hello World Test")).toBe("helloWorldTest");
    expect(camelCase("FOO_bar-Baz")).toBe("fooBarBaz");
  });
});

