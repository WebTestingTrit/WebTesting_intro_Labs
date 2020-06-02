let tests = [];

function addTest(description, testFunction) {
  tests.push({ name: description, function: testFunction });
}

function run() {
  tests.forEach(test => {
    try {
      test.function();
      console.log('✅', test.description);
    } catch (e) {
      console.log('❌', test.description);
      console.log(e.stack);
    }
  });
}

const testFiles = process.argv.slice(2);

global.addTest = addTest;

testFiles.forEach(testFile => {
  require(testFile);
});

run();
