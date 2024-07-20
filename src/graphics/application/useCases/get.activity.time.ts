import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";

export class GetActivityTime {
    constructor ( readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string) {
        try {
            const activityTime = await this.graphicsRepository.activityTime(kit_id);

            if (!activityTime) {
                throw new Error(`activity tyme not found for ${kit_id}`)
            };

            const response = await axios.get('http://127.0.0.1:5000/process', {
                params: {
                    data: JSON.stringify(activityTime)
                }
            });

            return response.data;

        } catch (error) {
            return null;
        }
    }
}