import { CsvParser } from "./CsvParser.js"

export class StoreService {
  constructor() {
    this.csvParser = new CsvParser()
  }

  calculateTotalIncome(csvContent) {
    const sales = this.csvParser.parse(csvContent)

    return sales.calculateTotal()
  }
}
