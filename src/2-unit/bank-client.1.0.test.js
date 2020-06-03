const BankClient = require('./bank-client');

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  sut.account = getFakeAccount();
  sut.loan = getFakeLoan();
  const inputDeposit = 20;
  when(`make a deposit `, () => {
    // Act
    sut.deposit(inputDeposit);
    then(`should acount deposit have been called once `, () => {
      // Assert
      const actual = sut.account._spy.filter(f => f.method === 'deposit').length;
      const expected = 1;
      assertEqual(actual, expected);
    });
    then(`should acount deposit have been called with ${inputDeposit} `, () => {
      // Assert
      const actual = sut.account._spy.find(f => f.method === 'deposit').args;
      const expected = 20;
      assertEqual(actual, expected);
    });
    then(`should loan payBack have not been called `, () => {
      // Assert
      const actual = sut.loan._spy.filter(f => f.method === 'payBack').length;
      const expected = 0;
      assertEqual(actual, expected);
    });
  });
});

getFakeAccount = () => {
  const account = {
    _spy: new Array(),
    getBalance: function () {
      account._spy.push({ method: 'getBalance', args: undefined });
      return 20;
    },
    deposit: amount => {
      account._spy.push({ method: 'deposit', args: amount });
    }
  };
  return account;
};

getFakeLoan = () => {
  const loan = {
    _spy: [],
    getDisposed: () => {
      loan._spy.push({ method: 'getDisposed', args: undefined });
      return 0;
    },
    payBack: amount => {
      loan._spy.push({ method: 'payBack', args: amount });
      return 0;
    }
  };
  return loan;
};
