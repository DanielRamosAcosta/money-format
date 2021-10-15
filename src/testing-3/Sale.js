export class Sale {
  constructor(name, price, amount) {
    this.name = name
    this.price = price
    this.amount = amount
  }

  calculateTotal() {
    return this.price * this.amount
  }
}
