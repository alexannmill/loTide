const head = function(actual) {
  return actual = actual[0];
};
// const assertEqual = function(actual, expected) {
//   if (actual === expected) console.log(`✅  Assertion Pass ${actual} === ${expected}`);
//   else console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
// };
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");