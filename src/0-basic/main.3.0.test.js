const test = require('./test3');
const sum = require('./main');
const inputA = 1;
const inputB = 2;

test.given(`a function that sums ${inputA} and ${inputB}`, () => {
  const expected = 3;
  test.should(`return ${expected}`, () => {
    const actual = sum(inputA, inputB);
    test.assertEqual(actual, expected);
  });
});
