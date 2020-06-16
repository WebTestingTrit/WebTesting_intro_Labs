exports.Account = class Account {
  constructor(credit = 100) {
    this._credit = credit;
    this._balance = 0;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance + this._credit) {
      throw 'credit insuffient';
    }
    this._balance -= amount;
  }
  getBalance() {
    return this._balance;
  }
};
