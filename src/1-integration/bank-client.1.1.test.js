const BankClient = require('./bank-client');

const initialDeposit = 20;
given(`a new bank client account with ${initialDeposit}`, () => {
  const sut = arrange(initialDeposit);
  const inputDeposit = 20;
  when(`deposit ${inputDeposit}`, () => {
    const actual = act(sut, inputDeposit);
    const expected = 40;
    then(`should have a position of ${expected}`, () => {
      assert(actual, expected);
    });
  });
});

arrange = inputDeposit => {
  const sut = new BankClient();
  sut.deposit(inputDeposit);
  return sut;
};
act = (sut, input) => {
  sut.deposit(input);
  return sut.getPosition();
};
assert = (actual, expected) => {
  assertEqual(actual, expected);
};
