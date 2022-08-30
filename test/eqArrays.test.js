const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")
const assert= require("chai").assert


describe("that two of the same array r", () => {
  it("returns index of given key hello.e - 1", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns the indexs of given letter ", () => {
    assert.equal(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it("returns the indexs of given letter ", () => {
    assert.equal(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);