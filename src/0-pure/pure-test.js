exports.test = function ({ given, should, actual, expected }) {
  console.group(`GIVEN: ${given}`);
  console.log(`SHOULD: ${should}`);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ FAILED: Expected: ${expected} but got ${actual}`);
  }
  console.groupEnd();
};
