exports.test = function test({ given, should, actual, expected }) {
  console.group(given);
  console.log(should);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
  }
  console.groupEnd();
};
