const test = require('./test2');
const sum = require('./main');
const inputA = 1;
const inputB = 2;

const spec = {
  given: `GIVEN a function that sums ${inputA} and ${inputB}`,
  should: `SHOULD return`,
  actual: sum(inputA, inputB),
  expected: 3
};

test.given(spec, () => {
  test.should(spec, () => {
    test.assertEqual(spec);
  });
});
