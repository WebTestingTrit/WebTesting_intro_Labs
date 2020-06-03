const BankClient = require('./bank-client.0.1');

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit = 20;
  when(`make a deposit ${inputDeposit}`, () => {
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

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit1 = 20;
  const inputDeposit2 = 30;
  when(`make two deposits ${inputDeposit2} and ${inputDeposit2}`, () => {
    // Act
    sut.deposit(inputDeposit1);
    sut.deposit(inputDeposit2);
    const actual = sut.getPosition();
    const expected = 50;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});
