import { Driving } from "../entity/driving";


export interface DrivingRepository {
    getDrivings(): Promise<Driving[]>
    getDrivingByDriverId(driver_id: string): Promise<Driving | null>
   // getDrivingsByDriverIdAndTimelapse(driver_id: string, start: Date, end: Date): Promise<Driving[] | null>;
    getDrivingsByKitId(kit_id: string): Promise<Driving | null>;
}