import { dbmysql } from "../../../database/application/mysql";
import { Kits } from "../../domain/entity/kits";
import { KitsRepository } from "../../domain/repository/kits.repository";
import { v4 as uuidv4 } from "uuid";

export class MysqlKits implements KitsRepository {
 

    getKitsByUserId(user_id: string): Promise<Kits[]> {
        const sql = 'CALL getKitsByUserId (?)';
        
        return dbmysql.execute(sql, [user_id])
        .then((res:any) => 
            res[0][0] as Kits[]
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
        const sql = 'CALL InsertKits (?, ?, ?, ?)';

        const newKitId = uuidv4();
       
        const newKit = new Kits(
            newKitId, 
            kits.user_id, 
            kits.unit_code,
            kits.name
        );

        return dbmysql.execute(sql, [
            newKit.id,
            newKit.user_id,
            newKit.unit_code,
            newKit.name
        ]).then( () => newKit);
    }

    updateKits(kit_id: string, unit_code: string, name: string): Promise<boolean> {
        const sql = 'CALL UpdateByIdKit (?, ?, ?)';

        return dbmysql.execute(sql, [
            kit_id,
            unit_code, 
            name
        ])
        .then(() => true)
        .catch((error: any) => {
            console.error('Error updating kits: ', error);
            return false
        })
    }
}