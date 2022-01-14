export class Clerk {
  constructor(credit) {
    this._credit = credit;
  }
  isNotAllowed(amount, balance) {
    return amount > balance + this._credit;
  }
}
