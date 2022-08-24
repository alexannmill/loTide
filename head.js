let actual = process.argv[2];
// console.log(typeof(actual))

const head = function(actual) {
  return actual[0];
};

console.log(head(actual));
