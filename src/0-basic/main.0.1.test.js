const assert = require('assert');
const sum = require('./main');

console.log('GIVEN a function that sums 1 and 2 THEN It should returns 3');
assert.equal(sum(1, 2), 3, '❌Fail');
console.log(`✅Passed`);
