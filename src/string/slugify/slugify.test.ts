import { slugify } from "./slugify";

describe("slugify", () => {
  it("converts space-separated words to a slug", () => {
    expect(slugify("hello world")).toBe("hello-world");
    expect(slugify("foo bar baz")).toBe("foo-bar-baz");
  });

  it("converts to lowercase", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("FOO BAR")).toBe("foo-bar");
  });

  it("removes special characters", () => {
    expect(slugify("hello@world#test")).toBe("hello-world-test");
    expect(slugify("foo!bar$baz")).toBe("foobarbaz");
  });

  it("replaces multiple spaces with single hyphen", () => {
    expect(slugify("hello    world")).toBe("hello-world");
    expect(slugify("foo   bar   baz")).toBe("foo-bar-baz");
  });

  it("handles kebab-case strings", () => {
    expect(slugify("hello-world")).toBe("hello-world");
    expect(slugify("foo-bar-baz")).toBe("foo-bar-baz");
  });

  it("handles snake_case strings", () => {
    expect(slugify("hello_world")).toBe("hello-world");
    expect(slugify("foo_bar_baz")).toBe("foo-bar-baz");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("  hello world  ")).toBe("hello-world");
    expect(slugify("-hello-world-")).toBe("hello-world");
  });

  it("handles empty strings", () => {
    expect(slugify("")).toBe("");
    expect(slugify("   ")).toBe("");
  });

  it("handles strings with only special characters", () => {
    expect(slugify("!!!")).toBe("");
    expect(slugify("@#$")).toBe("");
  });

  it("handles mixed case and special characters", () => {
    expect(slugify("Hello World! Test@123")).toBe("hello-world-test123");
  });
});

