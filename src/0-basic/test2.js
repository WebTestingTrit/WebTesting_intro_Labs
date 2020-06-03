const assert = require('assert');
const tab = '  ';

const given = (spec, fn) => {
  console.log(spec.given);
  fn();
};

const should = (spec, fn) => {
  console.log(`${tab}${spec.should} ${spec.expected}`);
  fn();
};

const assertEqual = spec => {
  try {
    assert.equal(spec.actual, spec.expected);
    console.log(`${tab}✅${tab}Passed`);
  } catch (e) {
    console.log(`${tab}❌${tab}Fail!${tab}Expected: ${spec.expected} but got ${spec.actual}`);
  }
};

module.exports = { given, should, assertEqual };
