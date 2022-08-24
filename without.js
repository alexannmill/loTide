const words = ["hello", "world", "lighthouse"];
function without(ar1, ar2){
let newArray =[];
  for (let i = 0; i < ar1.length; i++){
    if(ar1[i] !== ar2[i]){
      // console.log(typeof(ar1[i]))
      let keep = String(ar1[i])
      newArray = newArray + keep
    }
    if(ar1[i] === ar2[i]){
      newArray = newArray + ''
      // console.log(typeof(newArray))
    }
  }
  return console.log(newArray);
}
// function assertEqualArray(ar1, ar2){
//   if(eqArrays(ar1, ar2)){
//     console.log(`✅  Assertion Pass ${ar1} === ${ar2}`)
//   }
//   else {
//      console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`)
//   }
// }
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(words, ["lighthouse"]); 