import { query } from "../../../database/config";
import { DrivingRepository } from "../../domain/repository/driving.repository";
import { Driving } from "../../domain/entity/driving";


export class MysqlDriving implements DrivingRepository {

    getDrivings(): Promise<Driving[]> {
        const sql = 'CALL getAllDrivings()';

        return query(sql, [])
           .then((res: any) => 
            res[0][0] as Driving[]
           )
    }

    getDrivingByDriverId(driver_id: string): Promise<Driving | null> {
        const sql = 'CALL getDrivingByDriverId (?)';

        return query(sql, [driver_id])
           .then((result: any) => {
            return result[0][0] as Driving
           })
    }

    getDrivingsByKitId(kit_id: string): Promise<Driving | null> {
        const sql = 'CALL getDrivingByKitId (?)';

        return query(sql, [kit_id])
           .then((result: any) => {
            return result[0][0] as Driving
           })
        
    }
}