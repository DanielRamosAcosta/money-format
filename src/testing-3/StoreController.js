import fs from "fs"
import { StoreService } from "./StoreService.js"

export class StoreController {
  execute() {
    const rosFilePath = process.argv[2]

    const result = fs.readFileSync(rosFilePath, "utf8")

    const totalIncome = new StoreService().calculateTotalIncome(result)

    fs.writeFileSync(
      "./src/testing-3/report.txt",
      `Tus ventas totales han sido ${totalIncome}€`,
    )
  }
}
