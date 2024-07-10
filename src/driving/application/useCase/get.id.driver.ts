import { DrivingRepository } from "../../domain/repository/driving.repository";

export class GetDrivingByDriverId {
    constructor(readonly drivingRepository: DrivingRepository) {}

    async run(driver_id: string) {
        try {
          const drivingId = await this.drivingRepository.getDrivingByDriverId(driver_id);
          
          if (!drivingId) {
            throw new Error(`Driving not found ${drivingId}`)
          }
          return drivingId;
        } catch ( error ) {
            return null;
        }
    } 
}