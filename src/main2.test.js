const sum = require('./main');
const test = require('./test2');

const inputA = 1;
const inputB = 2;
test.describe(`GIVEN a function that sums ${inputA} and ${inputB}`, () => {
  const expected = 3;
  test.it(`SHOULD return ${expected}`, () => {
    const actual = sum(inputA, inputB);
    test.assertEqual(actual, expected);
  });
});
