import { Sale } from "./Sale"
import { Sales } from "./Sales"

export class CsvParser {
  parseRow(rowContent) {
    const columns = rowContent.split(",")

    return new Sale(columns[0], Number(columns[1]), parseInt(columns[2]))
  }

  parse(csvContent) {
    const sales = csvContent
      .split("\n")
      .filter((column) => column)
      .map(this.parseRow)

    return new Sales(sales)
  }
}
