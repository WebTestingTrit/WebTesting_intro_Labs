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
const shouldErrorMessage = `❌BUT returns ${actual}`;
assert.equal(actual, expected, shouldErrorMessage);
console.log(`✅Passed`);
