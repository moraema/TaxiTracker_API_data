import { MysqlDriving } from "./dataAccess/mysql.repository";
import { GetDriving } from "../application/useCase/get.driving";
import { GetDrivingByDriverId } from "../application/useCase/get.id.driver";
import { GetDrivingByKitsId } from "../application/useCase/get.id.kits";

import { GetDrivingByDriverIdController } from "./controller/get.id.driver.controller";
import { GetDrivingController } from "./controller/get.driving.controller";
import { GetDrivingByKitsIdController } from "./controller/get.id.kits.controller";


const mysqlDriving = new MysqlDriving();

const getDriving = new GetDriving(mysqlDriving);
const getDrivingByDriverId = new GetDrivingByDriverId(mysqlDriving);
const getDrivingByKitsId = new GetDrivingByKitsId(mysqlDriving);


export const getDrivingController = new GetDrivingController(
    getDriving
);

export const getDrivingByDriverIdController = new GetDrivingByDriverIdController(
    getDrivingByDriverId
);

export const getDrivingByKitsIdController = new GetDrivingByKitsIdController(
    getDrivingByKitsId
);