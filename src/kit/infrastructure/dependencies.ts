import { MysqlKits } from "./dataAccess/mysql.repository";
import { GetKitsByUserId } from "../application/useCase/get.kits.userId";
import { DeleteKits } from "../application/useCase/delete.kits";
import { AddKits } from "../application/useCase/add.kits";
import { UpdateKits } from "../application/useCase/update.kits";

import { GetKitsByUserIdController } from "./controllers/get.kits.userId.controller";
import { DeleteKitsController } from "./controllers/delete.kit.controller";
import { AddKitsController } from "./controllers/add.kits";
import { UpdateKitsController } from "./controllers/update.kits";


const mysqlKits = new MysqlKits();


const getKitsByUserId = new GetKitsByUserId(mysqlKits);
const deleteKits = new DeleteKits(mysqlKits);
const addKits = new AddKits(mysqlKits);
const updateKits = new UpdateKits(mysqlKits);


export const getKitsByUserIdController = new GetKitsByUserIdController(
    getKitsByUserId
);

export const deleteKitsController = new DeleteKitsController(
    deleteKits
);

export const addKitsController = new AddKitsController(
    addKits
);


export const updateKitsController = new UpdateKitsController(
    updateKits
);
