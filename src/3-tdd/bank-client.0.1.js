module.exports = class BankClient {
  constructor() {
    this.position = 0;
  }
  deposit(amount) {
    this.position += amount;
  }
  getPosition() {
    return this.position;
  }
};
