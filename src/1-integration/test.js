const assert = require('assert');
const tab = '  ';
let tests = [];

const given = (description, fn) => {
  tests.push({ description, fn });
};
global.given = given;

const when = (shouldMessage, fn) => {
  console.log(`${tab}WHEN${tab}${shouldMessage}`);
  fn();
};
global.when = when;

const then = (shouldMessage, fn) => {
  console.log(`${tab}${tab}THEN SHOULD${tab}${shouldMessage}`);
  fn();
};
global.then = then;

const assertEqual = (actual, expected) => {
  try {
    assert.equal(actual, expected);
    console.log(`${tab}${tab}✅${tab}Passed`);
  } catch (e) {
    console.log(`${tab}${tab}❌${tab}Fail: Expected: ${expected} but got ${actual}`);
  }
};
global.assertEqual = assertEqual;

function run() {
  tests.forEach(test => {
    console.log(`GIVEN${tab}${test.description}`);
    test.fn();
  });
}

const testFiles = process.argv.slice(2);

testFiles.forEach(testFile => {
  require(testFile);
});

run();

module.exports = { given, when, then, assertEqual };
