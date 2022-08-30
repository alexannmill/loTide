const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("testing letter position request index by giving key value", () => {
  it("returns index of given key hello.e - 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns the indexs of given letter ", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});
