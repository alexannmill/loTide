const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[1]); // => 
assertArraysEqual(middle([1, 2]), [1,2]); // => [
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2)  
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]);
