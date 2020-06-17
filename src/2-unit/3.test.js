const { test, expect } = require('../../utils/bit.tester');
const { Clerk } = require('./bank/clerk');

test('a clerk object calculating a balance', () => {
  expect('have the correct balance', actual, expected);
});

test('a clerk object calculating a balance', () => {
  const sut = new Clerk(100, transactions);
  let actual = sut.calculateBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

test('a clerk object calculating a balance', () => {
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(100, fakeTransactions);
  let actual = sut.calculateBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

test('a clerk object with enough balance and credit', () => {
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(100, fakeTransactions);
  let actual = sut.isAllowed(103);
  const expected = true;
  expect('allows the withdrawal', actual, expected);
});

test('a clerk object with not enough balance and credit', () => {
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(100, fakeTransactions);
  let actual = sut.isAllowed(108);
  const expected = false;
  expect('does not allow the withdrawal', actual, expected);
});
