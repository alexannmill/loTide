function middle(array) {
  let mid = Math.floor(array.length / 2);
  let elements = [];
  if (array.length < 3) {
    return array;
  }
  if (array.length % 2 === 1) {
    elements.push(array[mid]);
  }
  if (array.length % 2 === 0) {
    evenMid = mid - 1;
    elements.push(array[evenMid], array[mid]);
  }
  return elements;
}

module.exports = middle;
