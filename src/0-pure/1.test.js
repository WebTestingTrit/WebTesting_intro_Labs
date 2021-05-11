import { add, subtract } from './pure.js';
let actual;
let expected;

console.group(`It should add 1 plus 2 and return 3`);
actual = add(1, 2);
expected = 3;
if (actual === expected) {
  console.log('✅ Passed');
} else {
  console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
}
console.groupEnd();

console.group(`It should subtract 3 minus 2 and return 1`);
actual = subtract(3, 2);
expected = 1;
if (actual === expected) {
  console.log(`✅ Passed`);
} else {
  console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
}
console.groupEnd();
