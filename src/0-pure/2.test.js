const { add, subtract } = require('./pure');

let given;
let should;
let actual;
let expected;

given = 'GIVEN an add function with 1, 2';
should = 'SHOULD return 3';
actual = add(1, 2);
expected = 3;
console.group(given);
console.log(should);
if (actual === expected) {
  console.log(`✅ Passed`);
} else {
  console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
}
console.groupEnd();

given = 'GIVEN an subtract function with 3, 2';
should = 'SHOULD return 1';
actual = subtract(3, 2);
expected = 1;
console.group(given);
console.log(should);
if (actual === expected) {
  console.log('✅ Passed');
} else {
  console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
}
console.groupEnd();
