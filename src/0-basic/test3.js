const assert = require('assert');
const tab = '  ';
const given = (description, fn) => {
  console.log(`GIVEN${tab}${description}`);
  fn();
};

const should = (shouldMessage, fn) => {
  console.log(`${tab}SHOULD${tab}${shouldMessage}`);
  fn();
};

const assertEqual = (actual, expected) => {
  try {
    assert.equal(actual, expected);
    console.log(`${tab}✅${tab}Passed`);
  } catch (e) {
    console.log(`${tab}❌${tab}Fail: Expected: ${expected} but got ${actual}`);
  }
};

module.exports = { given, should, assertEqual };
