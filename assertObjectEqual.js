const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
   console.log(Object.keys(object1).length)
    return false;
  }
  for (key in object1) {
    if (object1[key] !== object2[key]) {
      console.log(object1[key])
      return false;
    }
    if (Array.isArray(object1[key]) !== Array.isArray(object1[key])) {
      return false;
    }
    if (object1[key].length !== object2[key].length) {
      return false;
    }
    for (let i = 0; i < object1[key].length; i++) {
      // console.log(object1[key][i], obn[i])
      if (object1[key][i] !== object2[key][i]) {
        return false;
      }
    }
    return true;
  };
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  if(eqObjects(object1, object2)){
    console.log(`✅  Assertion Pass ${object1} === ${object2}`)
  }
  else {
    console.log(`⛔  Assertion Fail  ${object1} !== ${object2}`)
  }
}
const inspect = require('util').inspect; // <= add this line
console.log(`Example label: ${inspect(actual)}`);

