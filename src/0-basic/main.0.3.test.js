const assert = require('assert');
const sum = require('./main');

const inputA = 1;
const inputB = 2;
const givenMessage = `GIVEN a function that sums ${inputA} and ${inputB}`;
console.log(givenMessage);
const expected = 3;
const shouldMessage = `SHOULD return ${expected}`;
console.log(shouldMessage);
const actual = sum(inputA, inputB);
try {
  assert.equal(actual, expected);
  console.log(`✅Passed`);
} catch {
  const shouldErrorMessage = `❌BUT returns ${actual}`;
  console.log(shouldErrorMessage);
}
