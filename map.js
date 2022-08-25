//Tesing Code
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
function assertArraysEqual(ar1, ar2){
  if(eqArrays(ar1, ar2)){
    console.log(`✅  Assertion Pass ${ar1} === ${ar2}`)
  }
  else {
     console.log(`⛔  Assertion Fail  ${ar1} !== ${ar2}`)
  }
}


// const words = ['pizza', 'pop', 'chips', 'cookies', 'cake'];
const words = [1, 4, 2, 7, 2, -6]

const map = function(array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item))    
  }
  return results
};

const results1 = map(words, word => word + 5);
// console.log(results1);

const actualMap = words.map(x => x + 5)
// console.log(actualMap)


assertArraysEqual(results1, actualMap)
