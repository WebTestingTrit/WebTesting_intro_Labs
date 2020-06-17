const { test, expect } = require('../../utils/bit.tester');
const { Clerk } = require('./bank/clerk');

test('credit on constructor', () => {
  const sut = new Clerk(100);
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

test('have a method to allow less than credit', () => {
  const sut = new Clerk(100);
  const actual = sut.isNotAllowed(200, 50);
  const expected = true;
  expect('returns true', actual, expected);
});
