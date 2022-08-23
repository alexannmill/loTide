const tail = function(actual) {
  let array = actual.slice(1);
  return array;
};

console.log(tail('hello'))
// const assertEqual = function(actual, expected) {
//   if (actual === expected) console.log(`✅  Assertion Pass ${actual} === ${expected}`);
//   else console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
// };
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

