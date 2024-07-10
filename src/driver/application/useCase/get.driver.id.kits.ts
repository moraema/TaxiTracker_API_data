import { DriversRepository } from "../../domain/repository/drivers.repository";

export class GetDriverByKitId {
    constructor( readonly driverRepository: DriversRepository){}

    async run(id: string) {
        try {
            const drivers = await this.driverRepository.getDriversByKitId(id);

            if(!drivers) {
                throw new Error(`Driver for kits no found ${id}`)
            }
            return drivers
        } catch(error) {
            return null;
        }
    }
}