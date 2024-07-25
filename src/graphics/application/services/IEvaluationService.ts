export interface DriverData {
    kit_id: string;
    driver_id: string;
    travel_id: string | null;
    datetime: Date;
    acceleration: number;
    deceleration: number;
    vibrations: number;
    travel_coordinates: any;
    inclination_angle: number;
    angular_velocity: number;
    g_force_x: number;
    g_force_y: number;
}

export interface IEvaluationService {
    evaluateDriverPerformance(data: DriverData[]): Promise<any>;
}