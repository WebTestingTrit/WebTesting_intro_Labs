const { test, expect } = require('./integration.tester');
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

test('a new account with a deposit', () => {
  const sut = new Account();
  sut.deposit(20);
  const actual = sut.getBalance();
  const expected = 20;
  expect('have the correct balance', actual, expected);
});

test('a new account with two deposit', () => {
  const sut = new Account();
  sut.deposit(20);
  sut.deposit(30);
  const actual = sut.getBalance();
  const expected = 50;
  expect('have the correct balance', actual, expected);
});

test('a new account with two different transactions', () => {
  const sut = new Account();
  sut.deposit(20);
  sut.withdraw(15);
  const actual = sut.getBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

test('a new account with more withdraw than deposit transactions', () => {
  const sut = new Account();
  sut.deposit(10);
  sut.withdraw(15);
  const actual = sut.getBalance();
  const expected = -5;
  expect('have the correct negative balance', actual, expected);
});

test('a new account with more withdraw than deposit and credit', () => {
  const inputCredit = 10;
  const sut = new Account(inputCredit);
  let actual = false;
  try {
    sut.withdraw(200);
  } catch (e) {
    actual = true;
  }
  const expected = true;
  expect('throw an exception', actual, expected);
});
