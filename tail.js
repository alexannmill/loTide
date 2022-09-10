let actual = process.argv[2];

const tail = function (actual) {
  return actual.slice(1);
};

module.exports = tail;
