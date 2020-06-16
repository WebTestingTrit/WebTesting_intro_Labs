const { test, expect } = require('../../utils/bit.tester');
const { Account } = require('./bank/account');

test('a new account with more withdraw than deposit transactions', () => {
  // arrange
  const sut = new Account();
  sut.deposit(10);
  sut.withdraw(15);
  // act
  const actual = sut.getBalance();
  // assert
  const expected = -5;
  expect('have the correct negative balance', actual, expected);
});

test('a new account with more withdraw than deposit and credit', () => {
  // arrange
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  let actual = false;
  // act
  try {
    sut.withdraw(20);
  } catch (e) {
    actual = true;
  }
  // assert
  const expected = true;
  expect('throw an exception', actual, expected);
});

test('a new account with no constructor parameter', () => {
  // arrange
  // act
  const sut = new Account();
  const actual = sut !== undefined;
  // assert
  const expected = true;
  expect('be defined', actual, expected);
});

test('a new account with a constructor parameter', () => {
  const sut = new Account(100);
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});
