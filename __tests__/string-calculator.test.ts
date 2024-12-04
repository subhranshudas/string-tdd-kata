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
});
