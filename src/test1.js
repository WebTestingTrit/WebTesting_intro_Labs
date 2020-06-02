const assert = require('assert');
module.exports = function test(spec) {
  try {
    console.log(`${spec.given}`);
    console.log(`${spec.should} ${spec.expected}`);
    assert.equal(spec.actual, spec.expected);
    console.log(`✅Passed`);
  } catch (e) {
    console.log(`❌Fail: Expected: ${spec.expected} but got ${spec.actual}`);
  }
};
