const head = require("../head");
const assert = require("chai").assert;

describe("testing the head function", () => {
  it("should return undefined if empty sting", () => {
    assert.strictEqual(head(""), undefined);
  });
  it("returns the first letter in a string", () => {
    assert.strictEqual(head("hello"), "h");
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
});
