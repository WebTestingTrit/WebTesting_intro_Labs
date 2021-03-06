exports.Clerk = class Clerk {
  constructor(credit = 100, transactions) {
    this._credit = credit;
    this._transactions = transactions;
  }
  calculateBalance() {
    let balance = 0;
    this._transactions.getAll().forEach(transaction => {
      switch (transaction.type) {
        case 'deposit':
          balance += transaction.amount;
          break;
        case 'withdraw':
          balance -= transaction.amount;
          break;
      }
    });
    return balance;
  }
  isAllowed(amount) {
    const currentBalance = this.calculateBalance();
    const creeditNeeded = Math.abs(currentBalance - amount);
    const isAllowed = creeditNeeded <= this._credit;
    return isAllowed;
  }
};
