import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";


export class GetDurationTravelsbyDay {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string, date: string) {
         try {
            const durationTravels = await this.graphicsRepository.durationTravelsbyDay(kit_id, date);

            if (!durationTravels) {
                throw new Error(`duration of traves by id not found ${kit_id}`);
            }

            const response = await axios.get('http://127.0.0.1:5000/process', {
                params: {
                    data: JSON.stringify(durationTravels)
                }
            });

            return response.data;
         } catch (error) {
            return null;
         }
    }
}