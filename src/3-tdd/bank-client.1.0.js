module.exports = class BankClient {
  constructor(credit) {
    this.credit = credit;
    this.position = 0;
  }
  deposit(amount) {
    this.position += amount;
  }
  withdraw(amount) {
    this.position -= amount;
  }
  getPosition() {
    return this.position;
  }
};
