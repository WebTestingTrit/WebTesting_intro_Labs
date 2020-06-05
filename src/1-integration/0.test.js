const { test, expect } = require('../testers/simple.tester');
const { Account } = require('./account');

test('a new account with no constructor parameter', () => {
  const sut = new Account();
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

test('a new account with a constructor parameter', () => {
  const sut = new Account(100);
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});
