import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";


export class GetTravelsByWeek {
    constructor (readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string) {
        try {

            const travelsbyweek = await this.graphicsRepository.travelsbyweek(kit_id);

            if (!travelsbyweek) {
                throw new Error(`travels id not found ${kit_id}`)
            };

            return travelsbyweek;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}