
const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) ){
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
 
  };
  return true;
};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(object1, object2)){
    console.log(`✅  Assertion Pass ${inspect(object1)} === ${inspect(object2)}`)
  }
  else {
    console.log(`⛔  Assertion Fail  ${inspect(object1)} !== ${inspect(object2)}`)
  }
}

assertObjectsEqual({a:1},{a:1});
assertObjectsEqual({a:1},{a:2});