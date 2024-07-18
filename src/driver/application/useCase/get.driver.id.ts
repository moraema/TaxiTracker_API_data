import { DriversRepository } from "../../domain/repository/drivers.repository";


export class GetDriversId {
    constructor(readonly driverRepository: DriversRepository) {}

    async run(driver_id: string) {

        try {
            const driverId = await this.driverRepository.getDriverId(driver_id);

            return driverId;
        } catch (error) {
            return null;
        }
    }
}