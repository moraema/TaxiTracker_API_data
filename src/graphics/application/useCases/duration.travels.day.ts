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

            const postData = {
                data: durationTravels
            };

            const response = await axios.post('https://yz4buk6enmccwxjsiqgtxkfbnq0hhioj.lambda-url.us-east-1.on.aws/', postData);

            if (!response.data) {
                console.error('Lambda response is empty');
                throw new Error('Lambda response is empty');
            }

            return response.data;
        } catch (error) {
            console.error('Error in run:', error);
            return null;
        }
    }
}