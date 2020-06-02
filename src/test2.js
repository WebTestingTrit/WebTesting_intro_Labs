const assert = require('assert');
const tab = '  ';

const describe = (description, fn) => {
  console.log(description);
  fn();
};

const it = (shouldMessage, fn) => describe(tab + shouldMessage, fn);

const assert = spec => {
  try {
    console.log(`${spec.given}`);
    console.log(`${spec.should} ${spec.expected}`);
    assert.equal(spec.actual, spec.expected);
    console.log(`✅Passed`);
  } catch (e) {
    console.log(`❌Fail: Expected: ${spec.expected} but got ${spec.actual}`);
  }
};
