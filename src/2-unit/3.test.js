const { test, expect } = require('./unit.tester');
const { Account } = require('./account');
const { Clerk } = require('./clerk');

test('a new account with one deposited transaction', () => {
  const sut = new Account();
  sut._clerk = new Clerk(100, getTransactionsFake());
  let actual = sut.getBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

test('a new account with more transactions', () => {
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  sut._clerk = new Clerk(100, getTransactionsFake());
  let actual = sut.getBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

function getTransactionsFake() {
  const transactionsSpy = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  return transactionsSpy;
}
