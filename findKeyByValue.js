//Test Code
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Pass ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
  }
};

//Actual Function
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

function findKeyByValue(object, value) {
  for (key of Object.keys(object)) {
    if (value === object[key]) {
      return key;
    }
  }
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "sci_fi"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
