import { TravelCoordinatesRepository } from "../../domain/repository/travel.coordinates.repository"


export class GetAllDriverDataId {
    constructor( readonly travelCoordinatesRepository: TravelCoordinatesRepository) {}

    async run(driver_id: string) {

        try {
            const travelsByDriverId = await this.travelCoordinatesRepository.getAllDriverDataId(driver_id);

            if (!travelsByDriverId) {
                return (`Travels data not found ${travelsByDriverId}`);
            }
            return travelsByDriverId;
        } catch ( error ) {
            return null;
        }
    }
}