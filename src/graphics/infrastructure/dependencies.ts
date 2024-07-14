import { MysqlGraphics } from "./dataAcess/mysql.repository";
import { GetDailyRatingsByDriverAndDate } from "../application/useCases/get.daily.ratings.driver.id";


import { GetDailyRatingsByDriverAndDateController } from "./controller/get.daily.rating.driver.id.controller";


const mysqlGraphics = new MysqlGraphics();


const getDailyRatingsByDriverAndDate = new GetDailyRatingsByDriverAndDate(mysqlGraphics);


export const  getDailyRatingsByDriver = new GetDailyRatingsByDriverAndDateController(
    getDailyRatingsByDriverAndDate
)