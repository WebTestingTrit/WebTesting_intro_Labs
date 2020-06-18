exports.test = function test(given, assert) {
  console.group(`GIVEN: ${given}`);
  try {
    assert();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
};

exports.expect = function expect(should, actual, expected) {
  console.log(`SHOULD: ${should}`);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ FAILED: Expected: ${expected} but got ${actual}`);
  }
};
