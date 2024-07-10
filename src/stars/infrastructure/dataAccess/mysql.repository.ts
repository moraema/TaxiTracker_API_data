import { dbmysql } from "../../../database/application/mysql";
import { StarsRepository } from "../../domain/repositpry/stars.repository";
import { Stars } from "../../domain/entity/stars";


export class MysqlStars implements  StarsRepository {

    addStars(start: Stars): Promise<Stars> {
        const sql = 'CALL InsertStars (?, ?, ?)';

        return dbmysql.execute(sql, [
            start.driver_id,
            start.travel_id,
            start.value
        ]).then()
    }
   
    getByIdStars(starsId: string): Promise<Stars | null> {
    const sql = 'CALL GetValueByTravels (?)';

    return dbmysql.execute(sql, [starsId])
         .then((result: any) => {
            return result[0][0] as Stars
         })
        
    }
}