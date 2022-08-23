const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅  Assertion Pass ${actual} === ${expected}`);
    else console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`)
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
