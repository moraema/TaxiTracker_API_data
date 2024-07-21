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

            const response = await axios.post('http://127.0.0.1:5000/process', {
                    data: JSON.stringify(travelsbyweek)
            });

            return response.data;
        } catch (error) {
            return null;
        }
    }
}