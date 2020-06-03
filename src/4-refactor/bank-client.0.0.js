module.exports = class BankClient {
  constructor(credit, loan) {
    this.credit = credit;
    this.loan = loan;
    this.position = 0;
  }
  deposit(amount) {
    this.position += amount;
  }
  withdraw(amount) {
    const creditNeeded = Math.abs(this.position - amount);
    if (creditNeeded > this.credit) {
      throw 'Not enough credit';
    }
    this.position -= amount;
  }
  getPosition() {
    return this.position;
  }
};
