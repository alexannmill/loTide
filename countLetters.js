const assert = require("./assertEqual");

const countLetters = (string) => {
  let result = {};
  let stringWithNoSpaces = string.split(" ").join("");
  for (letter of stringWithNoSpaces) {
    if (result.hasOwnProperty(letter)) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = { countLetters };
