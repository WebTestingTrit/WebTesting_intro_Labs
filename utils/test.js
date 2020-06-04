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
  console.log(`${tab}${tab}THEN${tab}${shouldMessage}`);
  fn();
};
global.then = then;

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`${tab}${tab}✅${tab}Passed`);
  } else {
    console.log(`${tab}${tab}❌${tab}Failed: Expected: ${expected} but got ${actual}`);
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
