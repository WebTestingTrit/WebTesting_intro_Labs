const sum = require('./main');
const test = require('./testGWT');

let inputA;
let inputB;
let sut;
let expected;
test.describe(`GIVEN a function that sums numbers`, () => {
  arrange();
  test.context(`WHEN its called with ${inputA} and ${inputB}`, () => {
    const actual = act(inputA, inputB);
    test.it(`THEN should return ${expected}`, () => {
      assert(actual, expected);
    });
  });
});

function arrange() {
  inputA = 1;
  inputB = 2;
  sut = sum;
  expected = 3;
}

function act(inputA, inputB) {
  return sut(inputA, inputB);
}

function assert(actual, expected) {
  test.assertEqual(actual, expected);
}
