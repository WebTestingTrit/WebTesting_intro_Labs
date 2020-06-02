const test = require('./test2');
const sum = require('./main');
const inputA = 1;
const inputB = 2;

// TO DO  v2 no spec object

const spec = {
  given: `GIVEN a function that sums ${inputA} and ${inputB}`,
  should: `SHOULD return`,
  actual: sum(inputA, inputB),
  expected: 3
};

test.describe(spec.given, () => {
  test.it(`${spec.should} ${expected}`, () => {
    test.assert(spec);
  });
});
