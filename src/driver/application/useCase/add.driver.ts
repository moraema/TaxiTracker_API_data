import { Drivers } from "../../domain/entity/drivers";
import { DriversRepository } from "../../domain/repository/drivers.repository";


export class AddDriver {
    constructor ( readonly driverRepository: DriversRepository) {}

    async run(driver: Drivers) {
        try {
            const driverAdd = await this.driverRepository.addDriver(driver);
            return driverAdd;
        }   catch ( error ) {
            return null;
        }
    }
}