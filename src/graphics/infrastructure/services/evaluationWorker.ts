import { workerData, parentPort } from 'worker_threads';
import { DriverData } from '../../application/services/IEvaluationService';

type MetricKey = keyof Pick<DriverData, 'acceleration' | 'deceleration' | 'vibrations' | 'inclination_angle' | 'angular_velocity' | 'g_force_x' | 'g_force_y'>;

interface WorkerData {
    chunk: DriverData[];
    idealValues: Record<MetricKey, number>;
    maxValues: Record<MetricKey, number>;
}

const { chunk, idealValues, maxValues } = workerData as WorkerData;

function calculateScore(value: number, idealValue: number, maxValue: number, metricName: MetricKey): number {
    if (metricName === 'inclination_angle') {
        if (value >= 85 && value <= 95) {
            return 100;
        } else if (value < 85) {
            return Math.max(0, 100 - (85 - value) * 5);
        } else {
            return Math.max(0, 100 - (value - 95) * 5);
        }
    } else if (idealValue === 0) {
        return 100 - Math.min(100, (Math.abs(value) / maxValue) * 100);
    } else {
        return 100 - Math.min(100, (Math.abs(value - idealValue) / maxValue) * 100);
    }
}

function processDriverDataChunk(chunk: DriverData[]): Record<MetricKey, number[]> {
    const scores: Record<MetricKey, number[]> = {
        acceleration: [],
        deceleration: [],
        vibrations: [],
        inclination_angle: [],
        angular_velocity: [],
        g_force_x: [],
        g_force_y: []
    };

    const metrics: MetricKey[] = ['acceleration', 'deceleration', 'vibrations', 'inclination_angle', 'angular_velocity', 'g_force_x', 'g_force_y'];

    for (const row of chunk) {
        for (const metric of metrics) {
            scores[metric].push(calculateScore(
                row[metric],
                idealValues[metric],
                maxValues[metric],
                metric
            ));
        }
    }

    return scores;
}

const result = processDriverDataChunk(chunk);
parentPort?.postMessage(result);