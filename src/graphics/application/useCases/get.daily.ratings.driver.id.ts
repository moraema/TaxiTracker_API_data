import { GraphicsRepository } from "../../domain/repository/graphics.repository";


export class GetDailyRatingsByDriverAndDate {
    constructor (readonly graphicsRepository: GraphicsRepository) {}


    async run(driver_id: string, date: string) {

        try {

            const graphicsRatingByDriver = await this.graphicsRepository.GetDailyRatingsByDriverAndDate(driver_id, date);

            if (!graphicsRatingByDriver) {
               throw new Error(`driver id not found ${driver_id}`);
            }
            return graphicsRatingByDriver;
        } catch (error) {
            return null;
        }

    }
}