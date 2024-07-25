import { Worker } from 'worker_threads';
import * as os from 'os';
import * as path from 'path';
import { IEvaluationService, DriverData } from '../../application/services/IEvaluationService';

interface EvaluationResult {
    overall_score: number;
    detailed_scores: Record<string, number>;
}

type MetricKey = keyof Pick<DriverData, 'acceleration' | 'deceleration' | 'vibrations' | 'inclination_angle' | 'angular_velocity' | 'g_force_x' | 'g_force_y'>;

export class EvaluationService implements IEvaluationService {
    private readonly idealValues: Record<MetricKey, number> = {
        acceleration: 3.5,
        deceleration: 1.0,
        vibrations: 4.0,
        inclination_angle: 90,
        angular_velocity: 0.7,
        g_force_x: 1.5,
        g_force_y: 7.0
    };

    private readonly maxValues: Record<MetricKey, number> = {
        acceleration: 6.5,
        deceleration: 5.0,
        vibrations: 12.0,
        inclination_angle: 95,
        angular_velocity: 2,
        g_force_x: 3.0,
        g_force_y: 12.0
    };

    public async evaluateDriverPerformance(driverData: DriverData[]): Promise<EvaluationResult> {
        const CHUNK_SIZE = 1000;
        const numCPUs = os.cpus().length;
        const chunks: DriverData[][] = [];

        for (let i = 0; i < driverData.length; i += CHUNK_SIZE) {
            chunks.push(driverData.slice(i, i + CHUNK_SIZE));
        }

        const chunkResults = await Promise.all(
            chunks.map((chunk, index) => 
                this.runWorker(chunk, index % numCPUs)
            )
        );

        const combinedScores = chunkResults.reduce((acc, curr) => {
            for (const [key, value] of Object.entries(curr) as [MetricKey, number[]][]) {
                if (!acc[key]) acc[key] = [];
                acc[key].push(...value);
            }
            return acc;
        }, {} as Record<MetricKey, number[]>);

        const avgScores = Object.entries(combinedScores).reduce((acc, [key, value]) => {
            acc[key as MetricKey] = value.reduce((sum, curr) => sum + curr, 0) / value.length;
            return acc;
        }, {} as Record<MetricKey, number>);

        const overallScore = Object.values(avgScores).reduce((sum, score) => sum + score, 0) / Object.keys(avgScores).length;

        return {
            overall_score: overallScore,
            detailed_scores: avgScores
        };
    }

    private runWorker(chunk: DriverData[], workerId: number): Promise<Record<MetricKey, number[]>> {
        return new Promise((resolve, reject) => {
            const workerPath = path.resolve(__dirname, 'evaluationWorker.ts');
            const worker = new Worker(workerPath, {
                workerData: { chunk, idealValues: this.idealValues, maxValues: this.maxValues }
            });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    }
}