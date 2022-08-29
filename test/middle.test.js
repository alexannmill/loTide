const middle = require("../middle");
const assert = require("chai").assert


describe("testing the middle function", () => {
  it("should return [] for empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns the only number in a single element array", () => {
    assert.deepEqual(middle([1]), [1]);
  });
  it("returns both numbers in a two element array", () => {
    assert.deepEqual(middle([5, 4]), [5, 4]);
  });
  it("returns middle number in 3 element array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 2 middle numbers for even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns 1 middle number for odd length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4,  5]), [3]);
  });
});
