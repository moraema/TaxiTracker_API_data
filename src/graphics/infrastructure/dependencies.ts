import { MysqlGraphics } from "./dataAcess/mysql.repository";
import { GetDailyRatingsByDriverAndDate } from "../application/useCases/get.daily.ratings.driver.id";
import { GetTravelsByDriverDistance } from "../application/useCases/get.travels.driverId.distance";


import { GetDailyRatingsByDriverAndDateController } from "./controller/get.daily.rating.driver.id.controller";
import { GetTravelsByDriverDistanceController } from "./controller/get.distance.driverId.controller";


const mysqlGraphics = new MysqlGraphics();


const getDailyRatingsByDriverAndDate = new GetDailyRatingsByDriverAndDate(mysqlGraphics);
const getTravelsByDriverIdDistance = new GetTravelsByDriverDistance(mysqlGraphics);


export const  getDailyRatingsByDriverController = new GetDailyRatingsByDriverAndDateController(
    getDailyRatingsByDriverAndDate
);

export const getTravelsByDriverDistanceController = new GetTravelsByDriverDistanceController(
getTravelsByDriverIdDistance
);