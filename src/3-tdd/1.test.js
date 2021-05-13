import { expect, test } from '../../utils/1-bit.tester.js';
import { Account } from './bank/1.account.js';


test('a new account with a deposit method', () => {
  const sut = new Account();
  let actual = false
  try {
    sut.deposit(20);
    actual = true;
  }
  catch (e) {
  }
  const expected = true;
  expect('have been called', actual, expected);
});

test('a new account with a deposit of 20', () => {
  const sut = new Account();
  sut.deposit(20);
  const actual = sut.getBalance();
  const expected = 20;
  expect('have a balance of 20', actual, expected);
});

test('a new account with a deposit of 30', () => {
  const sut = new Account();
  sut.deposit(30);
  const actual = sut.getBalance();
  const expected = 30;
  expect('have a balance of 30', actual, expected);
});

test('a new account with two deposits of 20 and 30', () => {
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
