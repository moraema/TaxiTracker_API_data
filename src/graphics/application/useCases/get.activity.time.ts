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

            const postData = {
                data: activityTime
            }

            const response = await axios.post('https://eeo5aemp2gxjz7ykphwi5fkbcu0kftrh.lambda-url.us-east-1.on.aws', postData);

            if (!response.data) {
                console.error('Lambda response is empty');
                throw new Error('Lambda response is empty');
            }

            return response.data;

        } catch (error) {
            return null;
        }
    }
}