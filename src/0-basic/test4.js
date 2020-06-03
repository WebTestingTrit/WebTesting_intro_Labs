const assert = require('assert');
const tab = '  ';
const given = (description, fn) => {
  console.log(`GIVEN${tab}${description}`);
  fn();
};

const when = (shouldMessage, fn) => {
  console.log(`${tab}WHEN${tab}${shouldMessage}`);
  fn();
};

const then = (shouldMessage, fn) => {
  console.log(`${tab}${tab}THEN SHOULD${tab}${shouldMessage}`);
  fn();
};

const assertEqual = (actual, expected) => {
  try {
    assert.equal(actual, expected);
    console.log(`${tab}${tab}✅${tab}Passed`);
  } catch (e) {
    console.log(`${tab}${tab}❌${tab}Fail: Expected: ${expected} but got ${actual}`);
  }
};

module.exports = { given, when, then, assertEqual };
