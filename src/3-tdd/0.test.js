import { expect, test } from '../../utils/bit.tester.js';
import { Account } from './bank/0.account.js';
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

test('a new account with another credit parameter', () => {
  const sut = new Account(50);
  const actual = sut._credit;
  const expected = 50;
  expect('have stored the correct credit', actual, expected);
});

test('a new account with no credit ', () => {
  const sut = new Account();
  const actual = sut._credit;
  const expected = 100;
  expect('have a default credit', actual, expected);
});
