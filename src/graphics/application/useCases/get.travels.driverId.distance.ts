import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";

export class GetTravelsByDriverDistance {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string, date: string) {

        try {
            
            const graphicsTravelsByDriverDistance = await this.graphicsRepository.GetTravelsByDriverDistance(kit_id, date);

            if (!graphicsTravelsByDriverDistance) {
                throw new Error(`driver id not found ${kit_id}`)
            }

            const response = await axios.post('http://127.0.0.1:5000/process', {
                    data: JSON.stringify(graphicsTravelsByDriverDistance)
            });

            return response.data;
        } catch (error) {
            return null;
        }
    }
}