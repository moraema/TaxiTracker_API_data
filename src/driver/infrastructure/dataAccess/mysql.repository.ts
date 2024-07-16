import { dbmysql } from "../../../database/application/mysql";
import { DriversRepository } from "../../domain/repository/drivers.repository";
import { Drivers } from "../../domain/entity/drivers";
import { v4 as uuidv4 } from "uuid";


export class MysqlDriver implements DriversRepository {

    getDriversByKitId(id: string): Promise<Drivers[]> {
        const sql = 'CALL GetDriversByKitId (?)';

        return dbmysql.execute(sql, [id])
           .then((res:any) => 
            res[0][0] as Drivers[]
           )
    }

    addDriver(driver: Drivers): Promise<Drivers> {
        const sql = 'CALL InsertDriver (?, ?, ?, ?, ?, ?)';

        const newDriverId = uuidv4();

        const newDriver = new Drivers(
            newDriverId,
            driver.kit_id,
            driver.name,
            driver.last_name,
            driver.pin,
            driver.image
        );

        return dbmysql.execute(sql, [
            newDriver.id,
            newDriver.kit_id,
            newDriver.name,
            newDriver.last_name,
            newDriver.pin,
            newDriver.image
        ]).then(() => newDriver)
    }

    deleteByIdDriver(driver_id: string): Promise<string> {
        const sql = 'CALL deleteDriverById (?)';

        return dbmysql.execute(sql, [driver_id])
           .then((res: any) => 
              res[0] as string
        )
    }

    updateByIdDriver(driver_id: string, name: string, last_name: string, image: string): Promise<boolean> {
        const sql = 'CALL UpdateByIdDriver (?, ?, ?, ?)';

        return dbmysql.execute(sql, [
            driver_id,
            name || null,
            last_name || null, 
            image || null
        ])
          .then(() => true)
          .catch((error: any) => {
            console.error('Error updating driver: ', error);
            return false;
          })

    }
}