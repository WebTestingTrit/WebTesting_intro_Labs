const BankClient = require('./bank-client');

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  sut.account = getFakeAccount();
  sut.loan = getFakeLoan();
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

getFakeAccount = () => {
  return {
    getBalance: () => 20,
    deposit: amount => {}
  };
};

getFakeLoan = () => {
  return {
    getDisposed: () => 0
  };
};
