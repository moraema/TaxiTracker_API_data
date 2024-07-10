import { MysqlStars } from "./dataAccess/mysql.repository";
import { AddStars } from "../application/useCases/add.stars";
import { GetStarsById } from "../application/useCases/get.id.stars";

import { AddStarsController } from "./controller/create.stars";
import { GetStarsByIdController } from "./controller/get.id.controller";

const mysqlStars = new MysqlStars();


const addstars = new AddStars(mysqlStars);
const getByIdStars = new GetStarsById(mysqlStars);


export const addStarsController = new AddStarsController(
    addstars
);

export const getByIdStarsController  = new GetStarsByIdController(
    getByIdStars
);