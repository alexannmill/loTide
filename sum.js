let args = process.argv.slice(2);

function sum() {
  args = Number(args[0]) + Number(args[1]);
  return args;
}

console.log(sum());

