const tail = require("../tail");
const assert = require("chai").assert;

describe("testing the tail function", () => {
  it("should return an empty string from", () => {
    assert.strictEqual(tail(""), "");
  });
  it("returns the first letter in a string", () => {
    assert.strictEqual(tail("hello"), "ello");
  });
  it("returns 5 for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("should return remainder of an array minus the first element", () => {
    assert.deepEqual(tail([5, 4, 2, 5]), [4, 2, 5]);
  });
});




// const assertEqual = require("../assertEqual");
// assertEqual(tail("hello"), "ello");
// assertEqual(tail("alex"), "lex");