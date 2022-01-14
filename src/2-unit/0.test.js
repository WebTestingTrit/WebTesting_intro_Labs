import { expect, test } from '../../utils/1-bit.tester.js';
import { Account } from './bank/account.js';

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
