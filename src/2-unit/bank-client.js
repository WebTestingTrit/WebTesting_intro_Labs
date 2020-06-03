const Account = require('./account');
const Loan = require('./loan');

module.exports = class BankClient {
  constructor(defaultCredit = 100) {
    this.account = new Account();
    this.loan = new Loan(defaultCredit);
  }
  deposit(amount) {
    if (this._hasPendingDebts()) {
      amount = this._payDebtsBefore(amount);
    }
    this.account.deposit(amount);
  }
  _hasPendingDebts() {
    return this.loan.getDisposed() > 0;
  }
  _payDebtsBefore(amount) {
    return this.loan.payBack(amount);
  }

  withdraw(amount) {
    if (this._needsCredit(amount)) {
      amount = this._askForCredit(amount);
    }
    this.account.withdraw(amount);
  }
  _needsCredit(amount) {
    return this.account.getBalance() < amount;
  }
  _askForCredit(amount) {
    const creditNeeded = amount - this.account.getBalance();
    this.loan.borrow(creditNeeded);
    return amount - creditNeeded;
  }

  getPosition() {
    return this.account.getBalance() - this.loan.getDisposed();
  }
};
