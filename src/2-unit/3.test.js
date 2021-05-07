import { expect, test } from '../../utils/bit.tester.js';
import { Clerk } from './bank/clerk.js';
test('a clerk object calculating a balance', () => {
  const inputCredit = 100;
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(inputCredit, fakeTransactions);
  let actual = sut.calculateBalance();
  const expected = 5;
  expect('have the correct balance', actual, expected);
});

test('a clerk object with enough balance and credit', () => {
  const inputCredit = 100;
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(inputCredit, fakeTransactions);
  let actual = sut.isAllowed(103);
  const expected = true;
  expect('allows the withdrawal', actual, expected);
});

test('a clerk object with not enough balance and credit', () => {
  const inputCredit = 100;
  const fakeTransactions = {
    getAll() {
      return [{ type: 'deposit', amount: 5 }];
    }
  };
  const sut = new Clerk(inputCredit, fakeTransactions);
  let actual = sut.isAllowed(108);
  const expected = false;
  expect('does not allow the withdrawal', actual, expected);
});
