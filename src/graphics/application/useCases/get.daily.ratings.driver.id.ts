import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";


export class GetDailyRatingsByDriverAndDate {
    constructor (readonly graphicsRepository: GraphicsRepository) {}


    async run(kit_id: string, date: string) {

        try {

            const graphicsRatingByDriver = await this.graphicsRepository.GetDailyRatingsByDriverAndDate(kit_id, date);

            if (!graphicsRatingByDriver) {
               throw new Error(`driver id not found ${kit_id}`);
            }

 
            const response = await axios.post('http://127.0.0.1:5000/process', {
                    data: JSON.stringify(graphicsRatingByDriver)
            });

            return response.data;
        } catch (error) {
            console.error('Error in GetDailyRatingsByDriverAndDate:', error);
            return null;
        }

    }
}