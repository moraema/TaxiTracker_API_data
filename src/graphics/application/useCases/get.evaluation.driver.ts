import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import axios from "axios";

interface EvaluationData {
    kit_id: string;
    driver_id: string;
    travel_id: string | null;
    datetime: string;
    acceleration: number;
    deceleration: number;
    vibrations: number;
    travel_coordinates: string | null;
    inclination_angle: number;
    angular_velocity: number;
    g_force_x: number;
    g_force_y: number;
}

interface LambdaResponse {
    overall_score: number;
    detailed_scores: {
        [key: string]: number;
    };
}

export class GetEvaluationByDriverId {
    constructor(readonly graphicsRepository: GraphicsRepository) {}

    async run(driver_id: string) {
        try {
            console.log(`Fetching evaluation data for driver id: ${driver_id}`);
            const graphicsEvaluationByDriver = await this.graphicsRepository.GetEvaluationByDriverId(driver_id);

            if (!graphicsEvaluationByDriver) {
                console.error(`Driver id not found: ${driver_id}`);
                throw new Error(`Driver id not found: ${driver_id}`);
            }

            console.log(`Processing data in batches...`);
            const results = await this.processDataInBatches(graphicsEvaluationByDriver as unknown as EvaluationData[]);

            console.log(`Finished processing data. Results:`, results);
            return results;
        } catch (error) {
            console.error('Error in Get Evaluation By Driver Id:', error);
            return null;
        }
    }

    async processDataInBatches(data: EvaluationData[]): Promise<LambdaResponse> {
        const LAMBDA_URL = 'https://tcx5rxlg7tjgks4dtx3vrgym5y0hqmnv.lambda-url.us-east-1.on.aws';
        const BATCH_SIZE = 1600;
        const results: LambdaResponse[] = [];

        for (let i = 0; i < data.length; i += BATCH_SIZE) {
            const batch = data.slice(i, i + BATCH_SIZE);

            try {
                console.log(`Sending batch ${i / BATCH_SIZE + 1} to Lambda...`);
                const response = await axios.post<LambdaResponse>(LAMBDA_URL, { data: batch });
                results.push(response.data);
                console.log(`Received response for batch ${i / BATCH_SIZE + 1}`);
            } catch (error) {
                console.error(`Error processing batch ${i / BATCH_SIZE + 1}:`, (error as any).message);
            }
        }

        if (results.length === 0) {
            throw new Error('No valid results received from Lambda');
        }

        // Combine the results of all batches
        const combinedResults = results.reduce((acc, result) => {
            Object.keys(result.detailed_scores).forEach(key => {
                if (!acc.detailed_scores[key]) acc.detailed_scores[key] = [];
                acc.detailed_scores[key].push(result.detailed_scores[key]);
            });
            if (!acc.overall_scores) acc.overall_scores = [];
            acc.overall_scores.push(result.overall_score);
            return acc;
        }, { detailed_scores: {} as { [key: string]: number[] }, overall_scores: [] as number[] });

        // Calculate the final averages
        const finalResults: LambdaResponse = {
            overall_score: combinedResults.overall_scores.reduce((a, b) => a + b, 0) / combinedResults.overall_scores.length,
            detailed_scores: {}
        };

        Object.keys(combinedResults.detailed_scores).forEach(key => {
            finalResults.detailed_scores[key] = combinedResults.detailed_scores[key].reduce((a, b) => a + b, 0) / combinedResults.detailed_scores[key].length;
        });

        return finalResults;
    }
}