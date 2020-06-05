const { Clerk } = require('./2.1.clerk');

exports.Account = class Account {
  constructor(credit = 100) {
    this._credit = credit;
    this._balance = 0;
    this._clerk = new Clerk(credit);
    this._transactions = new Array();
  }
  deposit(amount) {
    this._balance += amount;
    this._transactions.push({});
  }
  withdraw(amount) {
    if (this._clerk.isNotAllowed(amount, this._balance)) {
      throw 'credit insuffient';
    }
    this._balance -= amount;
  }
  getBalance() {
    return this._balance;
  }
};
