const sum = require('./main');
const test = require('./testGWT');

test.describe(`GIVEN a function that sums numbers`, () => {
  const inputA = 1;
  const inputB = 2;
  test.context(`WHEN its called with ${inputA} and ${inputB}`, () => {
    const sut = sum;
    const actual = sut(inputA, inputB);
    const expected = 3;
    test.it(`THEN should return ${expected}`, () => {
      test.assertEqual(actual, expected);
    });
  });
});
