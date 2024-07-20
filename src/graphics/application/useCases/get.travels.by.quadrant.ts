import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";

export class GetTravelsByQuadrant {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string) {
        try {
            const travelsbyquadrant = await this.graphicsRepository.travelsbyquadrant(kit_id);

            if (!travelsbyquadrant) {
                throw new Error(`travels through quadrant not found for ${kit_id}`)
            };

            const response = await axios.get('http://127.0.0.1:5000/process', {
                params: {
                    data: JSON.stringify(travelsbyquadrant)
                }
            });

            return response.data;
        } catch (error) {
            return null;
        }
    }
}