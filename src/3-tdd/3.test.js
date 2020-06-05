const { test, expect } = require('../testers/simple.tester');
const { Account } = require('./3.account');

// To Do: write requirements before

test('an account can save a transaction', () => {
  const sut = new Account();
  sut.deposit( 10 );
  let actual = sut.getBalance();
  const expected = 5;
  expect('and load it later', actual, expected);
});

test('a new account can save more transactions', () => {
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  sut._clerk = new Clerk(100, getTransactionsFake());
  let actual = sut.getBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});
