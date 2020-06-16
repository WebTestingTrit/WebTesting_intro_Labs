const { test, expect } = require('../../utils/bit.tester');
const { Account } = require('./bank/account');

test('a call to withdraw more than is allowed', () => {
  const sut = new Account();
  sut._transactions = getTransactionsFake();
  sut._clerk = getClerkFake();
  let actual = false;
  try {
    sut.withdraw(10);
  } catch (e) {
    actual = true;
  }
  const expected = true;
  expect('throws an exception', actual, expected);
});

test('a call to balance', () => {
  const sut = new Account();
  sut._transactions = getTransactionsFake();
  sut._clerk = getClerkFake();
  let actual = sut.getBalance();
  const expected = 10;
  expect('return what clerk has calculated', actual, expected);
});

function getTransactionsFake() {
  const transactionsFake = {
    store() {},
    getAll() {
      return [];
    }
  };
  return transactionsFake;
}

function getClerkFake() {
  const clerkFake = {
    calculateBalance() {
      return 10;
    },
    isAllowed() {
      return false;
    }
  };
  return clerkFake;
}
