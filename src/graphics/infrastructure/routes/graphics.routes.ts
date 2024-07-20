import express from 'express';
import { 
    getDailyRatingsByDriverController,
    getTravelsByDriverDistanceController,
    getDurationTravelsByDayController,
    getTravelsByWeekController,
    getTravelsByQuadranteController,
    getActivityTimeController
} from '../dependencies';


const graphicsroutes = express.Router();

graphicsroutes.get('/ratings/:kit_id/:date', getDailyRatingsByDriverController.run.bind(getDailyRatingsByDriverController)); // listo
graphicsroutes.get('/distance/:kit_id/:date', getTravelsByDriverDistanceController.run.bind(getTravelsByDriverDistanceController)); // listo
graphicsroutes.get('/duration-travels/:kit_id/:date', getDurationTravelsByDayController.run.bind(getDurationTravelsByDayController)); // listo
graphicsroutes.get('/travels-week/:kit_id', getTravelsByWeekController.run.bind(getTravelsByWeekController));// listo
graphicsroutes.get('/travels-quadrant/:kit_id', getTravelsByQuadranteController.run.bind(getTravelsByQuadranteController));//
graphicsroutes.get('/activity-time/:kit_id', getActivityTimeController.run.bind(getActivityTimeController)); // listo


export { graphicsroutes }