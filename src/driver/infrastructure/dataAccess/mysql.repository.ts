import { dbmysql } from "../../../database/application/mysql";
import { DriversRepository } from "../../domain/repository/drivers.repository";
import { Drivers } from "../../domain/entity/drivers";


export class MysqlDriver implements DriversRepository {

    getDriversByKitId(id: string): Promise<Drivers[]> {
        const sql = 'CALL GetDriversByKitId (?)';

        return dbmysql.execute(sql, [id])
           .then((res:any) => 
            res[0] as Drivers[]
           )
    }

    addDriver(driver: Drivers): Promise<Drivers> {
        const sql = 'CALL InsertDriver (?, ?, ?, ?, ?)';

        return dbmysql.execute(sql, [
            driver.id,
            driver.kit_id,
            driver.name,
            driver.last_name,
            driver.pin
        ]).then()
    }

    deleteByIdDriver(driver_id: string): Promise<string> {
        const sql = 'CALL deleteDriverById (?)';

        return dbmysql.execute(sql, [driver_id])
           .then((res: any) => 
              res[0] as string
        )
    }

    updateByIdDriver(driver_id: string, name: string, last_name: string, unit_code: string): Promise<boolean> {
        const sql = 'CALL UpdateByIdDriver (?, ?, ?, ?)';

        return dbmysql.execute(sql, [driver_id, name, last_name, unit_code])
          .then(() => true)
          .catch((error: any) => {
            console.error('Error updating driver: ', error);
            return false;
          })

    }
}