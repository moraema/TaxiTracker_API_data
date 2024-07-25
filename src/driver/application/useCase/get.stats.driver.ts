import { DriversRepository } from "../../domain/repository/drivers.repository";

export class GetStatsByDriverId {
    constructor(readonly driverRepository: DriversRepository) {}

    async run(driver_id: string) {
        try {
            const stats = await this.driverRepository.getDriverStats(driver_id);

            if (stats) {
                return stats[0];
            } else {
                return null;
            }
            
        } catch (error) {
            return null;
        }
    }
}