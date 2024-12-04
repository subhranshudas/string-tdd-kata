import { add } from "../src/utils/string-calculator";

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
