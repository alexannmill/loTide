const { assertArrayEqual } = require("./assertArraysEqual");
const { eqArray } = require("./eqArrays");

const flatten = (arr) => {
  let newArray = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      newArray = newArray.concat(flatten(el));
    } else {
      newArray.push(el);
    }
  });
  return newArray;
};

module.exports = { flatten };
