const eqArrays = require("./eqArrays")

function assertArraysEqual(ar1, ar2){
  if(eqArrays(ar1, ar2)){
    console.log(`✅  Assertion Pass ${ar1} === ${ar2}`)
  }
  else {
     console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`)
  }
}

// assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
// assertArraysEqual([1, 2], [1, 3]);

module.exports = assertArraysEqual;