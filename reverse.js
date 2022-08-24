let string = process.argv[2];

function reverseMe(string) {
  let reverse = '';
  for (let i = (string.length - 1); i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseMe(string));