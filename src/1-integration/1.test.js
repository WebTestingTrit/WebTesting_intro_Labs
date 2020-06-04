const { test, expect } = require('./integration.tester');
const { Account } = require('./account');

test('a new account with a deposit', () => {
  const sut = new Account();
  sut.deposit(20);
  const actual = sut.getBalance();
  const expected = 20;
  expect('have the correct balance', actual, expected);
});

test('a new account with two deposits', () => {
  const sut = new Account();
  sut.deposit(20);
  sut.deposit(30);
  const actual = sut.getBalance();
  const expected = 50;
  expect('have a balance with sum of amounts', actual, expected);
});

test('a new account with two different transactions', () => {
  const sut = new Account();
  sut.deposit(20);
  sut.withdraw(15);
  const actual = sut.getBalance();
  const expected = 5;
  expect('have a balance with substract of amounts', actual, expected);
});
