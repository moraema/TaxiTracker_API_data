import { dbmysql } from "../../../database/application/mysql";
import { Kits } from "../../domain/entity/kits";
import { KitsRepository } from "../../domain/repository/kits.repository";
import { v4 as uuidv4 } from "uuid";

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

        const newKitId = uuidv4();
       
        const newKit = new Kits(
            newKitId, 
            kits.user_id, 
            kits.unit_code
        );

        return dbmysql.execute(sql, [
            newKit.id,
            newKit.user_id,
            newKit.unit_code
        ]).then( () => newKit);
    }

}