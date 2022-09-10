const eqObjects = require("./eqObjects")

const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(object1, object2)) {
    console.log(
      `✅  Assertion Pass ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `⛔  Assertion Fail  ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

// assertObjectsEqual({ a: 1 }, { a: 1 });
// assertObjectsEqual({ a: 1 }, { a: 2 });

module.exports = { assertObjectsEqual }
