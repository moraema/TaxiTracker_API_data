import { MysqlGraphics } from "./dataAcess/mysql.repository";
import { EvaluationService } from "./services/EvaluationService";
import { GetDailyRatingsByDriverAndDate } from "../application/useCases/get.daily.ratings.driver.id";
import { GetTravelsByDriverDistance } from "../application/useCases/get.travels.driverId.distance";
import { GetDurationTravelsbyDay } from "../application/useCases/duration.travels.day";
import { GetTravelsByWeek } from "../application/useCases/get.travels.by.week";
import { GetTravelsByQuadrant } from "../application/useCases/get.travels.by.quadrant";
import { GetActivityTime } from "../application/useCases/get.activity.time";
import { GetEvaluationByDriverId } from "../application/useCases/get.evaluation.driver";

import { GetDailyRatingsByDriverAndDateController } from "./controller/get.daily.rating.driver.id.controller";
import { GetTravelsByDriverDistanceController } from "./controller/get.distance.driverId.controller";
import { GetDurationTravelsByDayController } from "./controller/get.duration.travels.day.controller";
import { GetTravelsByWeekController } from "./controller/get.travels.by.week.controller";
import { GetTravelsByQuadrantController } from "./controller/get.travels.quadrant.controller";
import { GetActivityTimeController } from "./controller/get.activity.time.controller";
import { GetEvaluationByDriverIdController } from "./controller/get.evaluation.driver";

const mysqlGraphics = new MysqlGraphics();
const evaluationService = new EvaluationService();

const getDailyRatingsByDriverAndDate = new GetDailyRatingsByDriverAndDate(mysqlGraphics);
const getTravelsByDriverIdDistance = new GetTravelsByDriverDistance(mysqlGraphics);
const getDurationTravelsByDay = new GetDurationTravelsbyDay(mysqlGraphics);
const getTravelsByWeek = new GetTravelsByWeek(mysqlGraphics);
const getTravelsByQuadrant = new GetTravelsByQuadrant(mysqlGraphics);
const getActivityTime = new GetActivityTime(mysqlGraphics);
const getEvaluationByDriverId = new GetEvaluationByDriverId(mysqlGraphics, evaluationService);

export const  getDailyRatingsByDriverController = new GetDailyRatingsByDriverAndDateController(
    getDailyRatingsByDriverAndDate
);

export const getTravelsByDriverDistanceController = new GetTravelsByDriverDistanceController(
getTravelsByDriverIdDistance
);

export const getDurationTravelsByDayController = new GetDurationTravelsByDayController(
    getDurationTravelsByDay
);

export const getTravelsByWeekController = new GetTravelsByWeekController(
   getTravelsByWeek
);

export const getTravelsByQuadranteController = new GetTravelsByQuadrantController(
    getTravelsByQuadrant
);

export const getActivityTimeController = new GetActivityTimeController(
    getActivityTime
);

export const getEvaluationByDriverIdController = new GetEvaluationByDriverIdController(
    getEvaluationByDriverId
);