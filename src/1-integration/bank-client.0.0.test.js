const BankClient = require('./bank-client');

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit = 20;
  when(`deposit ${inputDeposit}`, () => {
    // Act
    sut.deposit(inputDeposit);
    const actual = sut.getPosition();
    const expected = 20;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});
