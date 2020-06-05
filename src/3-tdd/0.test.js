const { test, expect } = require('../testers/simple.tester');
const { Account } = require('./0.account');
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

test('a new account with credit parameter', () => {
  const sut = new Account(100);
  const actual = sut._credit;
  const expected = 100;
  expect('have stored the credit', actual, expected);
});

test('a new account with no credit ', () => {
  const sut = new Account();
  const actual = sut._credit;
  const expected = 100;
  expect('have a default credit', actual, expected);
});
