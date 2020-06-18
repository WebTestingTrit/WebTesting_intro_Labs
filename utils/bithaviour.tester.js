exports.given = function test(given, scenario) {
  console.group(`GIVEN: ${given}`);
  try {
    scenario();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
};

exports.when = function test(when, action) {
  console.group(`WHEN: ${when}`);
  try {
    action();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
};

exports.then = function expect(should, actual, expected) {
  if (actual === expected) {
    console.log(`THEN : ${should} ✅`);
  } else {
    console.log(
      `THEN : ${should} ❌
      - Expected: ${expected} but got ${actual}`
    );
  }
};
