const assert = require('assert');
const sum = require('./main');

const inputA = 1;
const inputB = 2;

const spec = {
  given: `GIVEN a function that sums numbers ${inputA} and ${inputB}`,
  should: `SHOULD return`,
  actual: sum(inputA, inputB),
  expected: 3
};

try {
  console.log(`${spec.given}`);
  console.log(`${spec.should} ${spec.expected}`);
  assert.equal(spec.actual, spec.expected);
  console.log(`✅Passed`);
} catch (e) {
  console.log(`❌Fail: Expected: ${spec.expected} but got ${spec.actual}`);
}
