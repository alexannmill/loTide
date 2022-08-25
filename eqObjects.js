const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Pass ${actual} === ${expected}`);
  };
  if (actual !== expected) {
    console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
  };
};

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false
  }
  for (key in object1){
    if(object1[key] !== object2[key]){
      return false
    }
    if (Array.isArray(object1[key]) !== Array.isArray(object1[key])){
      return false
    }
    if ( object1[key].length !== object2[key].length){ 
      return false;
    }
    for (let i = 0; i < object1[key].length; i++){
        // console.log(object1[key][i], obn[i])
        if(object1[key][i] !== object2[key][i]){
          return false;
        }
    }
    return true;
    };
    return true
};
    
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false