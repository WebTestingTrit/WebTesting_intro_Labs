const { test, expect } = require('./unit.tester');
const { Account } = require('./account');

test('a new account with more withdraw than deposited transactions', () => {
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  sut._transactions = getTransactionsFake();
  let actual = true;
  try {
    sut.withdraw(2);
  } catch (e) {
    actual = false;
  }
  const expected = true;
  expect('have allowed the withdraw', actual, expected);
});

test('a new account with more withdraw than deposit and credit', () => {
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  sut._transactions = getTransactionsFake();
  let actual = false;
  try {
    sut.withdraw(20);
  } catch (e) {
    actual = true;
  }
  const expected = true;
  expect('throw an exception', actual, expected);
});

function getTransactionsFake() {
  const transactionsSpy = {
    store() {},
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  return transactionsSpy;
}
