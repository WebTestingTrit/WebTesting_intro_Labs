const test = require('./test4');
const sum = require('./main');

test.given(`a function that sums numbers`, () => {
  const inputA = 1;
  const inputB = 2;
  test.when(`called with ${inputA} and ${inputB}`, () => {
    const expected = 3;
    const actual = sum(inputA, inputB);
    test.then(`should return ${expected}`, () => {
      test.assertEqual(actual, expected);
    });
  });
});
