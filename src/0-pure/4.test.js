const { test } = require('../testers/pure.tester');
const { add, subtract } = require('./pure');

let assert;

assert = {
  given: 'an add function with 1, 2',
  should: 'return 3',
  actual: add(1, 2),
  expected: 3
};
test(assert);

assert = {
  given: 'an subtract function with 3, 2',
  should: 'return 1',
  actual: subtract(3, 2),
  expected: 1
};
test(assert);
