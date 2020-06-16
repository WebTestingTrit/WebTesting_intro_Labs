const test = function test({ given, should, actual, expected }) {
  console.group(`GIVEN: ${given}`);
  console.log(`SHOULD: ${should}`);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ FAILED: Expected: ${expected} but got ${actual}`);
  }
  console.groupEnd();
};

let assert = {
  given: 'an add expression with 1, 2',
  should: 'return 3',
  actual: 1 + 2,
  expected: 3
};
test(assert);

exports.test = test;
