import { query } from "../../../database/config";
import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import { Graphics } from "../../domain/entity/graphics";


export class MysqlGraphics implements GraphicsRepository {
   
    GetDailyRatingsByDriverAndDate(driver_id: string, date: string): Promise<Graphics | null> {
        const sql = 'CALL GetDailyRatingsByDriverAndDate(?, ?)';

        return query(sql, [driver_id, date])
           .then((result: any) => {
            return result[0][0] as Graphics;
           })
    }

    GetTravelsByDriverDistance(driver_id: string): Promise<Graphics | null> {
        const sql = 'CALL GetTravelsByDriverDistance (?)';

        return query(sql, [driver_id])
          .then((result: any) => {
            return result[0][0] as Graphics;
          })
    }
}