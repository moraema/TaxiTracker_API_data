import { dbmysql } from "../../../database/application/mysql";
import { Kits } from "../../domain/entity/kits";
import { KitsRepository } from "../../domain/repository/kits.repository";

export class MysqlKits implements KitsRepository {
 

    getAllKits(): Promise<Kits[]> {
        const sql = 'CALL GetAllKits()';
        
        return dbmysql.execute(sql)
        .then((res:any) => 
            res[0] as Kits[]
        )   
    }

    deleteByIdKits(kits_id: string): Promise<string> {
        const sql = 'CALL deleteKitById (?)';

        return dbmysql.execute(sql, [kits_id])
          .then((res: any) => 
              res[0] as string
        )
    }

    addKits(kits: Kits): Promise<Kits> {
        const sql = 'CALL InsertKits (?, ?, ?)';

        return dbmysql.execute(sql, [
            kits.id, 
            kits.user_id,
            kits.unit_code
        ]).then()
    }

}