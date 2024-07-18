import { query } from "../../../database/config";
import { Kits } from "../../domain/entity/kits";
import { KitsRepository } from "../../domain/repository/kits.repository";
import { v4 as uuidv4 } from "uuid";

export class MysqlKits implements KitsRepository {
 

    getKitsByUserId(user_id: string): Promise<Kits[]> {
        const sql = 'CALL getKitsByUserId (?)';
        
        return query(sql, [user_id])
        .then((res:any) => 
            res[0][0] as Kits[]
        )   
    }


    deleteByIdKits(kits_id: string): Promise<string> {
        const sql = 'CALL deleteKitById (?)';

        return query(sql, [kits_id])
          .then((res: any) => 
              res[0] as string
        )
    }

    addKits(kits: Kits): Promise<Kits> {
        const sql = 'CALL InsertKits (?, ?, ?, ?)';

        const newKitId = uuidv4();
       
        const newKit = new Kits(
            newKitId, 
            kits.user_id || '0',
            kits.unit_code,
            kits.name
        );

        return query(sql, [
            newKit.id,
            newKit.user_id,
            newKit.unit_code,
            newKit.name
        ]).then( () => newKit);
    }

    updateKits(kit_id: string, unit_code: string, name: string): Promise<boolean> {
        const sql = 'CALL UpdateByIdKit (?, ?, ?)';

        return query(sql, [
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

    updateKistUserId(kit_id: string, user_id: string): Promise<boolean> {
        const sql = 'CALL UpdateKistUserId(?, ?)';

        return query(sql, [
            kit_id,
            user_id
        ])
        .then(() => true)
        .catch((error: any) => {
            console.error('Error updating kits', error);
            return false
        })
    }


    getKitsId(kit_id: string): Promise<Kits[]> {
        const sql = 'CALL GetKitsId(?)';

        return query(sql, [
            kit_id
        ])
        .then((res:any) => 
            res[0][0] as Kits[]
        )
    }

}