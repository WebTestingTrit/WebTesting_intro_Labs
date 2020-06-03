const BankClient = require('./bank-client');

const initialDeposit = 20;
given(`a new bank client account with ${initialDeposit}`, () => {
  // Arrange
  const sut = new BankClient();
  sut.deposit(initialDeposit);
  const inputDeposit = 20;
  when(`deposit ${inputDeposit}`, () => {
    // act
    sut.deposit(inputDeposit);
    const actual = sut.getPosition();
    const expected = 40;
    then(`should have a position of ${expected}`, () => {
      // assert
      assertEqual(actual, expected);
    });
  });
});
