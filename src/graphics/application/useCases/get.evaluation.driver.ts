import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import { IEvaluationService, DriverData } from "../services/IEvaluationService";

export class GetEvaluationByDriverId {
    constructor(
        readonly graphicsRepository: GraphicsRepository,
        readonly evaluationService: IEvaluationService
    ) {}

    async run(driver_id: string) {
        try {
            console.log(`Fetching evaluation data for driver id: ${driver_id}`);
            const graphicsEvaluationByDriver = await this.graphicsRepository.GetEvaluationByDriverId(driver_id);

            if (!graphicsEvaluationByDriver) {
                console.error(`Driver id not found: ${driver_id}`);
                throw new Error(`Driver id not found: ${driver_id}`);
            }

            console.log(`Processing data in workers...`);

            const results = await this.evaluationService.evaluateDriverPerformance(graphicsEvaluationByDriver as unknown as DriverData[]);

            console.log(`Finished processing data. Results:`, results);
            return results;
        } catch (error) {
            console.error('Error in Get Evaluation By Driver Id:', error);
            return null;
        }
    }
}