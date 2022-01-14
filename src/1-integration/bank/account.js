import { Clerk } from './clerk.js';
import { Transactions } from './transactions.js';

export class Account {
  constructor(credit = 100) {
    this._transactions = new Transactions();
    this._clerk = new Clerk(credit, this._transactions.getAll());
  }
  deposit(amount) {
    this._transactions.store({ type: 'deposit', amount });
  }
  withdraw(amount) {
    if (this._clerk.isAllowed(amount)) {
      this._transactions.store({ type: 'withdraw', amount });
    } else {
      throw 'insufficient credit ';
    }
  }
  getBalance() {
    return this._clerk.calculateBalance();
  }
}
