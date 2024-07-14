import { Drivers } from "../entity/drivers";

export interface DriversRepository {
     getDriversByKitId(id: string): Promise<Drivers[] | null>;
     addDriver(driver: Drivers): Promise<Drivers>
     deleteByIdDriver(driver_id: string): Promise<string>;
     updateByIdDriver(driver_id: string, name: string, last_name:string, unit_code: string, image: string): Promise<boolean>;
}