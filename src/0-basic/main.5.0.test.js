const sum = require('./main');

given(`a function that sums numbers`, () => {
  // Arrange
  const inputA = 1;
  const inputB = 2;
  when(`called with positives ${inputA} and ${inputB}`, () => {
    // Act
    const actual = sum(inputA, inputB);
    const expected = 3;
    then(`should return ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
  // Arrange
  const inputC = -1;
  const inputD = -2;
  when(`called with negatives ${inputC} and ${inputD}`, () => {
    // Act
    const actual = sum(inputC, inputD);
    const expected = -3;
    then(`should return ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});
