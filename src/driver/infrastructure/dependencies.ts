import { MysqlDriver } from "./dataAccess/mysql.repository";
import { GetDriverByKitId } from "../application/useCase/get.driver.id.kits";
import { AddDriver } from "../application/useCase/add.driver";
import { DeleteDriver } from "../application/useCase/delete.driver";
import { UpdateDriver } from "../application/useCase/update.driver";


import  { GetDriversByKitIdController} from './controller/get.id.driver.kits';
import { AddDriverController } from "./controller/create.driver";
import { DeleteDriverController } from "./controller/delete.driver";
import { UpdateDriverController } from "./controller/update.driver.controller";

const mysqldrivers = new MysqlDriver();


const getDriverByKitId = new GetDriverByKitId(mysqldrivers);
const addDriver = new AddDriver(mysqldrivers);
const deleteDriver = new DeleteDriver(mysqldrivers);
const updateDriver = new UpdateDriver(mysqldrivers);



export const getDriverByKitIdController = new GetDriversByKitIdController(
    getDriverByKitId
);

export const addDriverController = new AddDriverController(
    addDriver
);

export const deleteDriverController = new DeleteDriverController(
    deleteDriver
);

export const updateDriverController = new UpdateDriverController(
    updateDriver
);