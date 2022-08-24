// Print all but first element
let actual = process.argv[2];

const tail = function(actual) {
  return actual.slice(1);
};

console.log(tail(actual));

