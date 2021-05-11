import { expect, test } from '../../utils/1-bit.tester.js';
import { Account } from './bank/3.account.js';
import { Clerk } from './bank/3.clerk.js';

test('a new account with more withdraw than deposit transactions', () => {
  const fakeClerk = {
    isNotAllowed(amount, balance) {
      return false;
    }
  };
  const sut = new Account(fakeClerk);
  sut.deposit(10);
  sut.withdraw(15);
  const actual = sut.getBalance();
  const expected = -5;
  expect('have the correct negative balance', actual, expected);
});

test('a clerk object with credit on constructor', () => {
  const sut = new Clerk(100);
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

test('a clerk object have a method to allow less than credit', () => {
  const sut = new Clerk(100);
  const actual = sut.isNotAllowed(200, 50);
  const expected = true;
  expect('returns true', actual, expected);
});

test('a new account with more withdraw than deposit transactions', () => {
  const inputClerk = new Clerk(100);
  const sut = new Account(inputClerk);
  sut.deposit(10);
  sut.withdraw(15);
  const actual = sut.getBalance();
  const expected = -5;
  expect('have the correct negative balance', actual, expected);
});
