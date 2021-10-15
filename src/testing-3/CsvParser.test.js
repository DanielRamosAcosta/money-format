import { CsvParser } from "./CsvParser"
import { Sales } from "./Sales"

describe("CsvParser", () => {
  it("returns an empty array if the string is empty", () => {
    const csvParser = new CsvParser()

    const result = csvParser.parse("")

    expect(result).toEqual(new Sales([]))
  })

  it("returns a single element", () => {
    const csvParser = new CsvParser()

    const result = csvParser.parse("pan,1,2")

    expect(result).toEqual(new Sales([{ name: "pan", price: 1, amount: 2 }]))
  })

  it("correctly parses float numbers", () => {
    const csvParser = new CsvParser()

    const result = csvParser.parse("bananas,0.5,10")

    expect(result).toEqual(
      new Sales([{ name: "bananas", price: 0.5, amount: 10 }]),
    )
  })

  it("returns two elements", () => {
    const csvParser = new CsvParser()

    const result = csvParser.parse("pan,1,2\nmilk,2,6")

    expect(result).toEqual(
      new Sales([
        { name: "pan", price: 1, amount: 2 },
        { name: "milk", price: 2, amount: 6 },
      ]),
    )
  })
})
