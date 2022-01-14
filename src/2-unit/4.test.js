import { expect, test } from '../../utils/1-bit.tester.js';
import { Transactions } from './bank/transactions.js';

test('a transactions manager asked to store one transaction', () => {
  const sut = new Transactions();
  sut.store({ type: 'deposit', amount: 5 });
  let actual = JSON.stringify(sut.getAll()[0]);
  const expected = JSON.stringify({ type: 'deposit', amount: 5 });
  expect('have the transaction stored', actual, expected);
});

test('a transactions manager asked to store two transactions', () => {
  const sut = new Transactions();
  sut.store({ type: 'deposit', amount: 1 });
  sut.store({ type: 'deposit', amount: 2 });
  let actual = sut.getAll().length;
  const expected = 2;
  expect('have both transactions stored', actual, expected);
});
