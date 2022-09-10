const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (result.hasOwnProperty(sentence[i])) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  delete result[" "];
  return result;
};

module.exports = letterPositions;
