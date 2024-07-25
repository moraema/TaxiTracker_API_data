import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";

export class GetTravelsByDriverDistance {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(kit_id: string, date: string) {
        try {
            // Obtener datos de la BD
            const graphicsTravelsByDriverDistance = await this.graphicsRepository.GetTravelsByDriverDistance(kit_id, date);
            console.log('graphicsTravelsByDriverDistance', graphicsTravelsByDriverDistance);

            if (!graphicsTravelsByDriverDistance) {
                throw new Error(`driver id not found ${kit_id}`)
            }

            // Preparar datos para enviar
            const postData = {
                data: graphicsTravelsByDriverDistance
            };

            // Enviar solicitud a la función Lambda
            const response = await axios.post('https://jg4llqcajaapeuaro5k7n2xore0wcfxv.lambda-url.us-east-1.on.aws', postData);

            // Verificar respuesta de la función Lambda
            if (!response.data) {
                console.error('La función Lambda no devolvió datos');
                throw new Error('Lambda response is empty');
            }

            return response.data;
        } catch (error) {
            console.error('Error en run:', error);
            return null;
        }
    }
}