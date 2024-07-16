import { DriversRepository } from "../../domain/repository/drivers.repository";


export class UpdateDriver {
    constructor (readonly driversRepository: DriversRepository) {}

    async run(driver_id: string, name: string, last_name: string, image: string) {

        try {
            const updateDriver = await this.driversRepository.updateByIdDriver(driver_id, name, last_name, image);

            if (updateDriver) {
                return 'Driver updated successfully';
            } else {
                return `Failed to update driver ${driver_id}`;
            }
        } catch (error) {
            return null;
        }
    }
}