import { DrivingRepository } from "../../domain/repository/driving.repository";

export class GetDriving {
    constructor (readonly drivingRepository: DrivingRepository) {}

    async run() {
        try {
            const driving = await this.drivingRepository.getDrivings();

            if (driving?.length == 0) {
                throw new Error("There's no driving")
            }
            return driving
        } catch ( error ) {
            null
        }
    }
}