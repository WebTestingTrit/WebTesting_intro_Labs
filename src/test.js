const assert = require('assert');
const tab = '  ';
const describe = (description, fn) => {
  console.log(description);
  fn();
};

const it = (shouldMessage, fn) => describe(tab + shouldMessage, fn);

const assertEqual = (actual, expected) => {
  try {
    assert.equal(actual, expected);
    console.log(`${tab}✅${tab}Passed`);
  } catch (e) {
    const shouldErrorMessage = `${tab}❌${tab}Fail: Expected: ${expected} but got ${actual}`;
    console.log(shouldErrorMessage);
  }
};

module.exports = { describe, it, assertEqual };
