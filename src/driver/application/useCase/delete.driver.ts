import { DriversRepository } from "../../domain/repository/drivers.repository";

export class DeleteDriver {
    constructor ( readonly driverRepository: DriversRepository) {}

    async run(driver_id: string){
       try {
        const findDriver = await this.driverRepository.deleteByIdDriver(driver_id);

        if (findDriver) {
            await this.driverRepository.deleteByIdDriver(driver_id);
            return 'Driver deleted'
        } else {
            return `The driver to removed were not found ${driver_id}`
        }
       } catch (error) {
        return null;
       }
        
    }
}