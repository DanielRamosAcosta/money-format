export class Sales {
  constructor(sales) {
    this.sales = sales
  }

  calculateTotal() {
    let total = 0

    for (const sale of this.sales) {
      total += sale.calculateTotal()
    }

    return total
  }
}
