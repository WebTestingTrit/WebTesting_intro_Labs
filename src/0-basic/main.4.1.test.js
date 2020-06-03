const test = require('./test4');
const sum = require('./main');

test.given(`a function that sums numbers`, () => {
  const inputA = 1;
  const inputB = 2;
  test.when(`called with positives ${inputA} and ${inputB}`, () => {
    const actual = sum(inputA, inputB);
    const expected = 3;
    test.then(`should return ${expected}`, () => {
      test.assertEqual(actual, expected);
    });
  });
  const inputC = -1;
  const inputD = -2;
  test.when(`called with negatives ${inputC} and ${inputD}`, () => {
    const actual = sum(inputC, inputD);
    const expected = -3;
    test.then(`should return ${expected}`, () => {
      test.assertEqual(actual, expected);
    });
  });
});
