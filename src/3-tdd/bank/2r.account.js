exports.Account = class Account {
  constructor(clerk) {
    this._balance = 0;
    this._clerk = clerk;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (this._clerk.isNotAllowed(amount, this._balance)) {
      throw 'credit insufficient';
    }
    this._balance -= amount;
  }
  getBalance() {
    return this._balance;
  }
};

// exports.Account = class Account {
//   constructor(credit = 100) {
//     this._credit = credit;
//     this._balance = 0;
//     this._clerk = new Clerk(credit);
//   }
//   deposit(amount) {
//     this._balance += amount;
//   }
//   withdraw(amount) {
//     if (this._clerk.isNotAllowed(amount, this._balance)) {
//       throw 'credit insufficient';
//     }
//     this._balance -= amount;
//   }
//   getBalance() {
//     return this._balance;
//   }
// };
