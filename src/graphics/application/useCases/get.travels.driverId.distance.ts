import { GraphicsRepository } from "../../domain/repository/graphics.repository";


export class GetTravelsByDriverDistance {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(driver_id: string) {

        try {
            
            const graphicsTravelsByDriverDistance = await this.graphicsRepository.GetTravelsByDriverDistance(driver_id);

            if (!graphicsTravelsByDriverDistance) {
                throw new Error(`driver id not found ${driver_id}`)
            }
            return graphicsTravelsByDriverDistance;
        } catch (error) {
            return null;
        }
    }
}