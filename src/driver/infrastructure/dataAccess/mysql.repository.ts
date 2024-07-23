import { query } from "../../../database/config";
import { DriversRepository } from "../../domain/repository/drivers.repository";
import { Drivers } from "../../domain/entity/drivers";
import { v4 as uuidv4 } from "uuid";


export class MysqlDriver implements DriversRepository {
    getDriversByKitId(id: string): Promise<Drivers[]> {
        const sql = 'CALL GetDriversByKitId (?)';

        return query(sql, [id])
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
            driver.image || ''
        );

        return query(sql, [
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

        return query(sql, [driver_id])
           .then((res: any) => 
              res[0] as string
        )
    }

    updateByIdDriver(driver_id: string, name: string, last_name: string, pin: number, image: string): Promise<boolean> {
        const sql = 'CALL UpdateByIdDriver (?, ?, ?, ?, ?)';

        return query(sql, [
            driver_id,
            name || null,
            last_name || null, 
            pin || null,
            image || null
        ])
          .then(() => true)
          .catch((error: any) => {
            console.error('Error updating driver: ', error);
            return false;
          })

    }

    getDriverId(driver_id: string): Promise<Drivers[] | null> {
        const sql = 'CALL GetDriversId(?)'

        return query(sql, [driver_id])
        .then((res: any) => 
            res[0][0] as Drivers[]
        )
    }

    getDriverStats(driver_id: string): Promise<Drivers[] | null> {
        const sql = 'CALL GetAllDriverData(?)'

        return query(sql, [driver_id])
        .then((res: any) => 
            res[0][0] as Drivers[]
        )
    }
}