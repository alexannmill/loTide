//Test Function
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


//Actual Function
const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++){
    if (result.hasOwnProperty(sentence[i])){
      result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      };
  };
  delete result[" "]
  return result;
};
assertEqualArray(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house")
//return empty object
// loop through arr - for in 
//compare letter to keys - 
//make key of letter or add to exs. key - has own property
//track the index of letter
//make index into var
//add index to object
//
//omit spaces from
