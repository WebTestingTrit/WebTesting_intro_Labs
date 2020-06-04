exports.test = function (given, assert) {
  console.group(`GIVEN: ${given}`);
  assert();
  console.groupEnd();
};

exports.expect = function (should, actual, expected) {
  console.log(`SHOULD: ${should}`);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ FAILED: Expected: ${expected} but got ${actual}`);
  }
};
