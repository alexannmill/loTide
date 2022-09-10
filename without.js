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
function assertEqualArray(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {
    console.log(`✅  Assertion Pass ${ar1} === ${ar2}`);
  } else {
    console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`);
  }
}

const words = ["hello", "world", "lighthouse"];
function without(SourceArray, ItemsToRemove) {
  let newArray = [];
  for (let i = 0; i < SourceArray.length; i++) {
    let flag = true;
    for (let j = 0; j < ItemsToRemove.length; j++) {
      if (SourceArray[i] === ItemsToRemove[j]) {
        flag = false;
      }
    }
    if (flag) {
      newArray.push(SourceArray[i]);
    }
  }
  return console.log(newArray);
}

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(words, ["lighthouse"]);
