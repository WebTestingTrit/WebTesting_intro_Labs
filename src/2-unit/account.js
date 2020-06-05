const { Clerk } = require('./clerk');
const { Transactions } = require('./transactions');
exports.Account = class Account {
  constructor(credit = 100) {
    this._transactions = new Transactions();
    this._clerk = new Clerk(credit, this._transactions);
  }
  deposit(amount) {
    this._transactions.store({ type: 'deposit', amount });
  }
  withdraw(amount) {
    if (this._clerk.isAllowed(amount)) {
      this._transactions.store({ type: 'withdraw', amount });
    } else {
      throw 'credit insuffient';
    }
  }
  getBalance() {
    return this._clerk.calculateBalance();
  }
};
