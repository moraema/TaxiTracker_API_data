import { dbmysql } from "../../../database/application/mysql";
import { GraphicsRepository } from "../../domain/repository/graphics.repository";
import { Graphics } from "../../domain/entity/graphics";


export class MysqlGraphics implements GraphicsRepository {
   
    GetDailyRatingsByDriverAndDate(driver_id: string, date: string): Promise<Graphics | null> {
        const sql = 'CALL GetDailyRatingsByDriverAndDate(?, ?)';

        return dbmysql.execute(sql, [driver_id, date])
           .then((result: any) => {
            return result[0][0] as Graphics;
           })
        
    }
}