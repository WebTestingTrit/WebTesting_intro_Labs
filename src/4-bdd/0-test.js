import { given, then, when } from '../../utils/2-bithavior.tester.js';
import { Account } from './bank/account.js';

given('the account is in credit AND the amount is a whole number', () => {
  const sut = new Account(10);
  const input = 10;
  when('the customer requests cash', () => {
    let actual = sut.withdraw(input);
    let expected = 10;
    then('returns the asked amount', actual, expected);
    actual = sut.getBalance();
    expected = -10;
    then('ensures the account is debited', actual, expected);
  });
});
