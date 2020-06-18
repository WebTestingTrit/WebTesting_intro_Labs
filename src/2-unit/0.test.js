const { test, expect } = require('../../utils/bit.tester');
const { Account } = require('./bank/account');

test('a new account with no constructor parameter', () => {
  const sut = new Account();
  sut._transactions = {};
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

test('a new account with a constructor parameter', () => {
  const sut = new Account(100);
  sut._transactions = {};
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});
