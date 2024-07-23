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

            const postData = {
                data: travelsbyquadrant
            };

            console.log('postData', postData);

            const response = await axios.post('https://324fvzufe6dri2gtxlm5e2mvc40agdoe.lambda-url.us-east-1.on.aws', postData);

            console.log('response', response);

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