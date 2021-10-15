import { StoreService } from "./StoreService"

const todaySales = `pan,1,2
pack de 12 huevos,1,2
milk,2,6
pollo,3,1
bananas,0.5,10
bacon pack,2.5,9
suavizante lavadora,2.5,9
fregasuelos,2.5,9
escoba,2.5,9
`

describe("StoreService", () => {
  it("works", () => {
    const storeService = new StoreService()

    const result = storeService.calculateTotalIncome(todaySales)

    expect(result).toEqual(114)
  })
})
