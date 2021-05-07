export class Account {
  constructor(clerk) {
    this._balance = 0;
    this._clerk = clerk;
    this._transactions = new Array();
  }
  deposit(amount) {
    this._balance += amount;
    this._transactions.push({});
  }
  withdraw(amount) {
    if (this._clerk.isNotAllowed(amount, this._balance)) {
      throw 'insufficient credit ';
    }
    this._balance -= amount;
    this._transactions.push({});
  }
  getBalance() {
    return this._balance;
  }
}
