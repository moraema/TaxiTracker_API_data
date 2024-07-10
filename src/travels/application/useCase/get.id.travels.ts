import { TravelCoordinatesRepository } from "../../domain/repository/travel.coordinates.repository";


export class GetTravelsByDriverId {
    constructor (readonly travelCoordinatesRepository: TravelCoordinatesRepository) {}

    async run(driver_id: string){

        try {
            const travelsDriverId = await this.travelCoordinatesRepository.getTravelDriverId(driver_id);

            if (!travelsDriverId) {
                throw new Error(`Travel coordinates not found ${travelsDriverId}`)
            }
            return travelsDriverId;
        } catch ( error ) {
            return null;
        }
    }
}