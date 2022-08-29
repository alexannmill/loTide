const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Pass ${actual} === ${expected}`);
  };
  if (actual !== expected) {
    console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
  };
};


module.exports = assertEqual;