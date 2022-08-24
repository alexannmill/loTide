function eqArrays(ar1, ar2){
  if ( ar1.length !== ar2.length){ 
    return false;
  }
  for (let i = 0; i < ar1.length; i++){
      // console.log(ar1[i], ar2[i])
      if(ar1[i] !== ar2[i]){
        return false;
      }
  }
  return true;
}
function assertEqualArray(ar1, ar2){
  if(eqArrays(ar1, ar2)){
    console.log(`✅  Assertion Pass ${ar1} === ${ar2}`)
  }
  else {
     console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`)
  }
}

assertEqualArray([1, 2, 3], [1, 2, 3]);

eqArrays([1, 2, 3], [1, 2, 3]), true;
eqArrays([1, 2, 3], [3, 2, 1]), false;
eqArrays(["1", "2", "3"], ["1", "2", "3"]), true;
eqArrays(["1", "2", "3"], ["1", "2", 3]), false;