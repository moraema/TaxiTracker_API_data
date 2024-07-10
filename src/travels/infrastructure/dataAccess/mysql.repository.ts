import { dbmysql } from "../../../database/application/mysql";
import { TravelCoordinates } from "../../domain/entity/travels.coordinates";
import { TravelCoordinatesRepository } from "../../domain/repository/travel.coordinates.repository";

export class MysqlTravelCoordinates implements TravelCoordinatesRepository {

    getTravelDriverId(driver_id: string): Promise<TravelCoordinates | null> {
        const sql = 'CALL getTravelCoordinatesByDriverId (?)';

        return dbmysql.execute(sql, [driver_id])
           .then((result: any) => {
            return result[0][0] as TravelCoordinates
            })
    }

    getAllDriverDataId(driver_id: string): Promise<TravelCoordinates | null> {
        const sql = 'CALL GetAllDriverData (?)';

        return dbmysql.execute(sql, [driver_id])
           .then((result: any) => {
            return result[0][0] as TravelCoordinates
           })
    }
}