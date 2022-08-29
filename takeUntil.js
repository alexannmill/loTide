//Tesing Code
function eqArrays(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    // console.log(ar1[i], ar2[i])
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
}
function assertArraysEqual(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅  Assertion Pass ${ar1} === ${ar2}`);
  }
  else {
    console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`);
  }
}


const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    console.log(callback(element))
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);