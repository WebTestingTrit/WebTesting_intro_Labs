export class Account {
  constructor(credit) {
    this._credit = credit;
    this._balance = 0;
  }
  withdraw(amount) {
    this._balance -= amount;
    return amount;
  }
  getBalance() {
    return this._balance;
  }
}
