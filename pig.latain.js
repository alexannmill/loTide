function pigLatian(string) {
  let firstL = string[0];
  // piggy = piggy.shift()
  let piggy = string.slice(1);
  piggy = piggy + firstL;
  piggy = piggy + 'ay';
  return piggy;
}

console.log(pigLatian('hello'));