const { test, expect } = require('../testers/simple.tester');
const { Account } = require('./account');

test('a new account with a deposit', () => {
  const sut = new Account();
  sut._transactions = getTransactionsSpy();
  sut.deposit(20);
  const argsSpied = sut._transactions._callsSpy.find(f => f.method === 'store').args;
  const actual = JSON.stringify(argsSpied);
  const expected = JSON.stringify({ type: 'deposit', amount: 20 });
  expect('have stored the transaction', actual, expected);
});

test('a new account with two different transactions', () => {
  const sut = new Account();
  sut._transactions = getTransactionsSpy();
  sut.deposit(20);
  sut.withdraw(15);
  const actual = sut._transactions._callsSpy.filter(f => f.method === 'store').length;
  const expected = 2;
  expect('have have store two transactions', actual, expected);
});

function getTransactionsSpy() {
  const transactionsSpy = {
    _callsSpy: new Array(),
    store(transaction) {
      transactionsSpy._callsSpy.push({ method: 'store', args: transaction });
    }
  };
  return transactionsSpy;
}
