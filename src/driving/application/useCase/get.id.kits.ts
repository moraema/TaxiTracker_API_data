import { DrivingRepository } from "../../domain/repository/driving.repository";

export class GetDrivingByKitsId {
    constructor(readonly drivingRepository: DrivingRepository) {}

    async run(kit_id: string){
        try {
            const kitsId = await this.drivingRepository.getDrivingsByKitId(kit_id);

            if (!kit_id) {
                throw new Error(`Kits not found ${kitsId}`)
            }
            return kitsId;
        } catch ( error ) {
            return null;
        }
    }
}