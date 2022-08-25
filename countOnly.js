//Testing Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Pass ${actual} === ${expected}`);
  };
  if (actual !== expected) {
    console.log(`⛔  Assertion Fail  ${actual} !== ${expected}`);
  };
};


// collect items and return counts of subsets
// wont count everything
//condiutions on items
//items are strings


// Actual Function
const countOnly = function(allItems, itemsToCount) {
let result = {}
for (item in itemsToCount){
  // console.log(itemsToCount[item])
  if (itemsToCount[item]){
    let count = allItems.filter(name => name === item).length  
    if (count === 0) {
      result[item] = undefined
    } else {
      result[item] = count 
    }
  } else {
    result[item] = undefined
  }
}
return result
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);