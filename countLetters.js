const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Pass ${actual} === ${expected}`);
  };
  if (actual !== expected) {
    console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
  };
};

function countLetters(string){
 let result ={};
  let stringWithNoSpaces = string.split(' ').join('');
  for (letter of stringWithNoSpaces){
    if (result.hasOwnProperty(letter)){
      result[letter]+=1;
      } else {
        result[letter] = 1;
      ;} 
    };
    console.log(result);
};

countLetters("lighthouse in the house")