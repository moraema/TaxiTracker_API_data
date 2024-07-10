import { MysqlTravelCoordinates } from "./dataAccess/mysql.repository";
import { GetTravelsByDriverId } from "../application/useCase/get.id.travels";
import { GetAllDriverDataId } from "../application/useCase/get.id.driver.travels";


import { GetTravelsByDriverIdController } from "./controllers/get.id.travels.controller";
import { GetAllDriverDataIdController } from "./controllers/get.id.travels.driver.controller";

const mysqlTravelCoordinates = new MysqlTravelCoordinates();

const getTravelsByDriverId = new GetTravelsByDriverId(mysqlTravelCoordinates);
const getAllDriverDataId = new GetAllDriverDataId(mysqlTravelCoordinates);



export const getTravelsByDriverIdController = new GetTravelsByDriverIdController(
    getTravelsByDriverId
);

export const getAllDriverDataIdController = new GetAllDriverDataIdController(
    getAllDriverDataId
);

