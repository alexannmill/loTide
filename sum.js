let args = process.argv.slice(2);

// args = Number(args[0]) + Number(args[1]);
// console.log(args);


// args = sum = (a = Number(args[0]) , b=  Number(args[1])) => a + b
// console.log(args)

function sum() {
  args = Number(args[0]) + Number(args[1]);
  return args;
}
console.log(sum());