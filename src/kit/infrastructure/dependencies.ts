import { MysqlKits } from "./dataAccess/mysql.repository";
import { GetAllKits } from "../application/useCase/get.all.kits";
import { DeleteKits } from "../application/useCase/delete.kits";
import { AddKits } from "../application/useCase/add.kits";


import { GetAllKitsController } from "./controllers/get.all.controller";
import { DeleteKitsController } from "./controllers/delete.kit.controller";
import { AddKitsController } from "./controllers/add.kits";


const mysqlKits = new MysqlKits();


const getAllKits = new GetAllKits(mysqlKits);
const deleteKits = new DeleteKits(mysqlKits);
const addKits = new AddKits(mysqlKits);


export const getAllKitsController = new GetAllKitsController(
    getAllKits
);

export const deleteKitsController = new DeleteKitsController(
    deleteKits
);

export const addKitsController = new AddKitsController(
    addKits
)
