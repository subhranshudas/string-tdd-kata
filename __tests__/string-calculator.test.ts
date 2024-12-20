import { add } from "../src/utils/string-calculator";

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number for single number string", () => {
    expect(add("1")).toBe(1);
  });

  it("should return sum for two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should return sum for multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4")).toBe(10);
    expect(add("10,20,30,40")).toBe(100);
  });

  it("should handle newline as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

  it("should handle custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//#\n1#2#3")).toBe(6);
    expect(add("//@\n2@3@8")).toBe(13);
  });

  describe("negative numbers", () => {
    it("should throw error for single negative number", () => {
      expect(() => add("-1")).toThrow("negative numbers not allowed: -1");
    });

    it("should throw error with all negative numbers in message", () => {
      expect(() => add("2,-4,3,-5")).toThrow(
        "negative numbers not allowed: -4, -5"
      );
      expect(() => add("-1,-2,-3")).toThrow(
        "negative numbers not allowed: -1, -2, -3"
      );
    });

    it("should throw error with negative numbers when using custom delimiter", () => {
      expect(() => add("//;\n1;-2;3;-4")).toThrow(
        "negative numbers not allowed: -2, -4"
      );
    });
  });
});
