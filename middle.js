// Test Functions
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
// assertEqualArray([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2, 3]), true;
// eqArrays([1, 2, 3], [3, 2, 1]), false;
// eqArrays(["1", "2", "3"], ["1", "2", "3"]), true;
// eqArrays(["1", "2", "3"], ["1", "2", 3]), false;


// Actual Function

function middle(array){
  let mid = Math.floor((array.length) / 2)
  let elements = []
  // console.log('mid', mid)
  //for 0-2 eles
  if (array.length < 3 ){
    console.log(elements)
    return elements
    // for even mids
  } 
  else if(mid % 2 === 0){
    evenMid = mid - 1
    elements.push(array[evenMid], array[mid])
  }
// for odd mids
  else if (mid % 2 === 1){
    elements.push(array[mid])
  }
  console.log(elements)
  return elements
};

//  return array[middle]

//call in array to function
//find lentgh of array
// think about odd, even, 0
// floor down
// call that element ---- thing of 2 el arr 
//print out middle indexs elements
//test with 


middle([])
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1,2,3,4,5,6,7,8])

middle([1, 2, 3, 4,])