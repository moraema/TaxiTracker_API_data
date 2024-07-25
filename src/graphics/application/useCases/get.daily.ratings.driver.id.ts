import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";


export class GetDailyRatingsByDriverAndDate {
    constructor (readonly graphicsRepository: GraphicsRepository) {}


    async run(kit_id: string) {

        try {

            const graphicsRatingByDriver = await this.graphicsRepository.GetDailyRatingsByDriverAndDate(kit_id);

            if (!graphicsRatingByDriver) {
               throw new Error(`driver id not found ${kit_id}`);
            }

            return graphicsRatingByDriver;
        } catch (error) {
            console.error('Error in GetDailyRatingsByDriverAndDate:', error);
            return null;
        }

    }
}